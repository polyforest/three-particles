import { ReadonlyDeep } from 'type-fest'

/**
 * When a sub-emitter fires, relative to the parent particle.
 * - `birth`: when the parent particle spawns.
 * - `death`: when the parent particle reaches the end of its natural life
 *   (not when a trigger's `killParticle` removes it).
 * - `age`: once, when the parent's age reaches `at` (a 0-1 fraction of its
 *   life by default, or seconds with `unit: 'seconds'`).
 * - `position`: once, when the parent's position on `axis` crosses `value`
 *   in the direction of `op` (e.g. `y < 0` for a waterfall's splash line).
 *   `space: 'local'` (default) is the effect's local space; `'world'`
 *   applies the effect's world transform first.
 */
export type SubEmitterTrigger =
    | { type: 'birth' }
    | { type: 'death' }
    | { type: 'age'; at: number; unit: 'fraction' | 'seconds' }
    | {
          type: 'position'
          axis: 'x' | 'y' | 'z'
          op: '<' | '>'
          value: number
          space: 'local' | 'world'
      }

export type SubEmitterTriggerJson =
    | { type: 'birth' }
    | { type: 'death' }
    | { type: 'age'; at: number; unit?: 'fraction' | 'seconds' }
    | {
          type: 'position'
          axis: 'x' | 'y' | 'z'
          op: '<' | '>'
          value: number
          space?: 'local' | 'world'
      }

/**
 * Starts an instance of another emitter in the same effect (the template)
 * at a parent particle when the trigger fires. Chaining templates that
 * have their own `subEmitters` builds multi-stage effects (a firework whose
 * sparks each burst again), up to {@link MAX_SUB_EMITTER_DEPTH} levels.
 */
export interface SubEmitterModel {
    /** The uuid of the template emitter (another emitter in the effect). */
    emitter: string
    trigger: SubEmitterTrigger
    /** Chance, 0-1, that a firing trigger actually spawns. */
    probability: number
    /** Fraction, 0-1, of the parent particle's velocity the children inherit. */
    inheritVelocity: number
    /** Multiply the children's color by the parent's color at trigger time. */
    inheritColor: boolean
    /** For age/position triggers: the parent particle dies when it fires. */
    killParticle: boolean
}

export type SubEmitterModelJson = Omit<
    Partial<SubEmitterModel>,
    'emitter' | 'trigger'
> & {
    emitter: string
    trigger: SubEmitterTriggerJson
}

/** Maximum length of a sub-emitter chain (root → child → grandchild → …). */
export const MAX_SUB_EMITTER_DEPTH = 3

/** Default cap on simultaneous instances of one template emitter. */
export const DEFAULT_SUB_EMITTER_MAX_INSTANCES = 32

export const subEmitterDefaults = {
    probability: 1,
    inheritVelocity: 0,
    inheritColor: false,
    killParticle: false,
} as const

function fail(emitterId: string, message: string): never {
    throw new Error(`Invalid sub-emitter on emitter '${emitterId}': ${message}`)
}

// JSON is untrusted input: check values against these lists rather than
// the narrowed TypeScript types.
const AGE_UNITS: readonly unknown[] = ['fraction', 'seconds']
const AXES: readonly unknown[] = ['x', 'y', 'z']
const OPS: readonly unknown[] = ['<', '>']
const SPACES: readonly unknown[] = ['local', 'world']

function finite(value: unknown): value is number {
    return typeof value === 'number' && Number.isFinite(value)
}

function parseTrigger(
    json: ReadonlyDeep<SubEmitterTriggerJson> | undefined,
    emitterId: string,
): SubEmitterTrigger {
    if (!json || typeof json !== 'object')
        fail(emitterId, 'a trigger is required.')
    switch (json.type) {
        case 'birth':
        case 'death':
            return { type: json.type }
        case 'age': {
            const unit = json.unit ?? 'fraction'
            if (!AGE_UNITS.includes(unit))
                fail(emitterId, `unknown age unit '${String(unit)}'.`)
            if (!finite(json.at) || json.at < 0)
                fail(emitterId, 'age trigger `at` must be a number >= 0.')
            if (unit === 'fraction' && json.at > 1)
                fail(emitterId, 'age trigger `at` is a fraction, 0-1.')
            return { type: 'age', at: json.at, unit }
        }
        case 'position': {
            if (!AXES.includes(json.axis))
                fail(
                    emitterId,
                    "position trigger `axis` must be 'x', 'y' or 'z'.",
                )
            if (!OPS.includes(json.op))
                fail(emitterId, "position trigger `op` must be '<' or '>'.")
            if (!finite(json.value))
                fail(emitterId, 'position trigger `value` must be a number.')
            const space = json.space ?? 'local'
            if (!SPACES.includes(space))
                fail(
                    emitterId,
                    "position trigger `space` must be 'local' or 'world'.",
                )
            return {
                type: 'position',
                axis: json.axis,
                op: json.op,
                value: json.value,
                space,
            }
        }
        default:
            fail(
                emitterId,
                `unknown trigger type '${String((json as { type?: unknown }).type)}'.`,
            )
    }
}

function unit(
    value: number | undefined,
    fallback: number,
    field: string,
    emitterId: string,
): number {
    if (value === undefined) return fallback
    if (!finite(value) || value < 0 || value > 1)
        fail(emitterId, `\`${field}\` must be a number from 0 to 1.`)
    return value
}

/** Parses one sub-emitter entry, applying defaults and validating fields. */
export function parseSubEmitter(
    json: ReadonlyDeep<SubEmitterModelJson>,
    emitterId: string,
): SubEmitterModel {
    if (typeof json.emitter !== 'string' || json.emitter.length === 0)
        fail(emitterId, '`emitter` must name another emitter by uuid.')
    const trigger = parseTrigger(json.trigger, emitterId)
    const killParticle = json.killParticle ?? subEmitterDefaults.killParticle
    if (killParticle && trigger.type !== 'age' && trigger.type !== 'position')
        fail(
            emitterId,
            '`killParticle` only applies to age and position triggers.',
        )
    return {
        emitter: json.emitter,
        trigger,
        probability: unit(
            json.probability,
            subEmitterDefaults.probability,
            'probability',
            emitterId,
        ),
        inheritVelocity: unit(
            json.inheritVelocity,
            subEmitterDefaults.inheritVelocity,
            'inheritVelocity',
            emitterId,
        ),
        inheritColor: json.inheritColor ?? subEmitterDefaults.inheritColor,
        killParticle,
    }
}

/**
 * Checks the effect's sub-emitter graph: every reference names an emitter
 * in the effect, there are no cycles, and no chain is deeper than
 * {@link MAX_SUB_EMITTER_DEPTH}. Throws with a descriptive message.
 */
export function validateSubEmitterGraph(
    emitters: readonly {
        uuid: string
        subEmitters: readonly SubEmitterModel[]
    }[],
): void {
    const byId = new Map(emitters.map((e) => [e.uuid, e]))
    for (const e of emitters) {
        for (const sub of e.subEmitters) {
            if (sub.emitter === e.uuid)
                fail(e.uuid, 'an emitter cannot be its own sub-emitter.')
            if (!byId.has(sub.emitter))
                fail(e.uuid, `unknown emitter '${sub.emitter}'.`)
        }
    }

    // Longest chain below each emitter, with cycle detection (DFS colors).
    const depthBelow = new Map<string, number>()
    const visiting = new Set<string>()
    const visit = (id: string, path: string[]): number => {
        const cached = depthBelow.get(id)
        if (cached !== undefined) return cached
        if (visiting.has(id))
            throw new Error(
                `Invalid sub-emitters: cycle ${[...path, id].map((p) => `'${p}'`).join(' → ')}.`,
            )
        visiting.add(id)
        let deepest = 0
        for (const sub of byId.get(id)!.subEmitters) {
            deepest = Math.max(deepest, 1 + visit(sub.emitter, [...path, id]))
        }
        visiting.delete(id)
        depthBelow.set(id, deepest)
        return deepest
    }
    for (const e of emitters) {
        const depth = visit(e.uuid, [])
        if (depth > MAX_SUB_EMITTER_DEPTH)
            fail(
                e.uuid,
                `the sub-emitter chain is ${depth} levels deep; the maximum is ${MAX_SUB_EMITTER_DEPTH}.`,
            )
    }
}

/** The uuids of emitters used as sub-emitter templates. */
export function subEmitterTemplateIds(
    emitters: readonly { subEmitters: readonly SubEmitterModel[] }[],
): Set<string> {
    const ids = new Set<string>()
    for (const e of emitters)
        for (const sub of e.subEmitters) ids.add(sub.emitter)
    return ids
}
