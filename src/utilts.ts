/*
 *  Contains small utility functions used across this project.
 *  Created On 15 January 2024
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function filterObject(obj: Record<string, any>, keysToExclude: string[]): Record<string, any> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keysToExclude.includes(key))
    )
}
