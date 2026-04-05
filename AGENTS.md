# Agent Development Guidelines

You are an AI assistant helping with code development. Follow these rules strictly and precisely.

## File Organization Rules

### Rule 1: File Naming Convention
- ALWAYS use dash-case (kebab-case) for all file names
- Example: `user-profile.ts`, `api-handler.ts`, `data-processor.ts`
- NEVER use camelCase, PascalCase, or snake_case for file names

### Rule 2: File Header and Directives
Every file MUST start with a file header comment.
**Exception**: If the file requires a directive like `'use client'` or `'use server'`, this directive MUST appear on the very first line, BEFORE the file header comment.

Format:
```
['use client' / 'use server' if applicable]

/*
 *  [Single line description of file purpose]
 *  Created On [DD] [Full Month Name] [YYYY]
 */

[blank line here]
[code starts here]
```

Example (Standard):
```
/*
 *  Handles user authentication and session management
 *  Created On 15 March 2024
 */

export const authenticateUser = async () => {
```

Example (With Directive):
```
'use client'

/*
 *  Client-side dashboard component
 *  Created On 15 March 2024
 */

export function Dashboard() {
```

### Rule 3: File Size Limit
- Split code into logical modules
- NO file should exceed 300 lines
- When approaching 300 lines, refactor into separate files

## Code Style Rules

### Rule 4: Comment Style
- All comments EXCEPT the file header MUST be lowercase
- Use `//` for comments (NOT JSDoc)
- Only add comments when explicitly requested by the developer
- Example: `// this validates the user input`

### Rule 5: Control Flow
- ALWAYS prefer `if/else` statements
- NEVER use `switch` statements unless explicitly requested

### Rule 6: Code Structure
- Prefer standalone functions over classes
- Keep functions focused and single-purpose

### Rule 7: Asynchronous Code
- ALWAYS use `async/await` syntax
- NEVER use callbacks or promise chains
- Exception: Only use callbacks/promises when explicitly requested or technically necessary

### Rule 8: Function Declaration Style
- ALWAYS use regular function declarations with the `function` keyword
- Arrow functions are ONLY allowed in:
  1. Closures (callbacks, higher-order functions)
  2. React components
- NEVER use arrow functions for top-level exports or standalone functions

Example (CORRECT):
```typescript
export async function processData() {
  // implementation
}

export function validateInput(input: string) {
  // implementation
}

// arrow functions OK in closures
export function mapUsers(users: User[]) {
  return users.map((user) => user.name);
}

// arrow functions OK in React
export const UserProfile = () => {
  return Profile;
};
```

Example (INCORRECT):
```typescript
export const processData = async () => {  // WRONG - use function keyword
  // implementation
};

export const validateInput = (input: string) => {  // WRONG - use function keyword
  // implementation
};
```

### Rule 9: Exports
- ALWAYS use named exports at the definition point
- NEVER use default exports
- NEVER export at the bottom of files

Example (CORRECT):
```typescript
export async function processData() {
  // implementation
}

export function validateInput(input: string) {
  // implementation
}
```

Example (INCORRECT):
```typescript
// WRONG - not exported at definition
async function processData() {
  // implementation
}

export { processData };

// WRONG - default export
export default processData;

// WRONG - arrow function for top-level export
export const processData = async () => {
  // implementation
};
```

### Rule 10: Error Handling
- DO NOT add try/catch blocks unless explicitly instructed
- Instead, throw descriptive errors: `throw new Error('Descriptive message here')`
- Let errors bubble up to be handled at appropriate levels

### Rule 11: Equality Operators
- ALWAYS use loose equality (`==` and `!=`)
- NEVER use strict equality (`===` or `!==`)
- This avoids strict type checking during runtime

### Rule 12: Iteration
- ALWAYS use `for (const ... of ...)` or `for (const ... in ...)` for loops
- NEVER use `Array.prototype.forEach()`

## Quality Assurance Rules

### Rule 13: Type Checking (MANDATORY)
Before completing ANY task:
1. ALWAYS run `bun run type-check`
2. Fix any type errors before submitting
3. Confirm zero type errors

### Rule 14: Linting (MANDATORY)
To fix code style issues:
1. Run `bun run lint` in the terminal
2. This automatically fixes formatting issues
3. Do NOT manually fix linting errors - use the command

### Rule 15: TypeScript Strictness
- NEVER use `// @ts-ignore`, `// @ts-expect-error`, or `// @ts-nocheck`
- ALWAYS write full, proper TypeScript code with correct types and interfaces
- If you encounter a type error, resolve it by:
  1. Fixing the underlying type mismatch
  2. Defining missing interfaces/types
  3. Using type narrowing (e.g., `typeof`, `instanceof`, or custom type guards)
  4. Using `unknown` instead of `any` when the type is unknown
- Do NOT use `any` unless there is no other way to represent the type

## Compliance Checklist

Before completing each task, verify:
- [ ] File name uses dash-case
- [ ] File header comment is present (after directive if applicable)
- [ ] One blank line after file header
- [ ] All other comments are lowercase
- [ ] No file exceeds 300 lines
- [ ] Using if/else (not switch)
- [ ] Using async/await (not callbacks/promises)
- [ ] Using named exports at definition
- [ ] Using loose equality (==) not strict (===)
- [ ] Using for (const ... of/in) instead of .forEach()
- [ ] No try/catch unless requested
- [ ] `bun run type-check` passes with zero errors (no `@ts-ignore`)
- [ ] `bun run lint` has been executed

## Summary

These rules are MANDATORY and NON-NEGOTIABLE. Follow them precisely for every file you create or modify. When in doubt, refer back to this document or ask questions before starting the task.