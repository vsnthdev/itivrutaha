/*
 *  Contains small utility functions used across this project.
 *  Created On 15 January 2024
 */

export function filterObject(obj: Record<string, any>, keysToExclude: string[]): Record<string, any> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keysToExclude.includes(key))
    )
}
