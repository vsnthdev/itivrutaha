/*
 *  Type declarations for date-format package
 *  Created On 05 April 2026
 */

declare module 'date-format' {
    function format(date?: Date): string;
    function format(formatStr: string, date?: Date): string;

    namespace format {
        function asString(date?: Date): string;
        function asString(formatStr: string, date?: Date): string;
        function parse(pattern: string, str: string, missingValuesDate?: Date): Date;
        function now(): Date;

        const ISO8601_FORMAT: string;
        const ISO8601_WITH_TZ_OFFSET_FORMAT: string;
        const DATETIME_FORMAT: string;
        const ABSOLUTETIME_FORMAT: string;
    }

    export default format;
}
