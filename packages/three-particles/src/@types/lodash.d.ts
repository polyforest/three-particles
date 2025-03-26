import 'lodash'

declare module 'lodash' {
    /**
     * Extends lodash defaults to use type guards.
     */
    interface LoDashStatic {
        /**
         * Assigns own enumerable properties of source object(s) to the destination object for all destination
         * properties that resolve to undefined. Once a property is set, additional values of the same property are
         * ignored.
         *
         * Note: This method mutates object.
         *
         * @param object The destination object.
         * @param source The source objects.
         * @return The destination object.
         */
        defaults<TObject, TSource>(
            object: TObject,
            source: TSource,
        ): asserts object is NonNullable<TSource & TObject>

        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
        ): asserts object is NonNullable<TSource2 & TSource1 & TObject>

        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
        ): asserts object is NonNullable<
            TSource3 & TSource2 & TSource1 & TObject
        >
        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
        ): asserts object is NonNullable<
            TSource4 & TSource3 & TSource2 & TSource1 & TObject
        >
        /**
         * @see _.defaults
         */
        defaults<TObject>(
            object: TObject,
        ): asserts object is NonNullable<TObject>
        /**
         * @see _.defaults
         */
        defaults(object: any, ...sources: any[]): any
    }
}
