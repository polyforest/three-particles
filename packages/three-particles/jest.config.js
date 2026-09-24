/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    testEnvironment: 'node',
    transform: {
        '^.+\.tsx?$': ['ts-jest', {}],
        // three r186 ships ESM-only: its CJS entry is a deprecated require(esm)
        // shim that Jest's CJS runtime cannot execute. Let ts-jest compile
        // three's ES sources to CJS as well (cached after the first run).
        '^.+\.m?js$': ['ts-jest', { tsconfig: { allowJs: true } }],
    },
    transformIgnorePatterns: ['node_modules/(?!three/)'],
    restoreMocks: true,
}
