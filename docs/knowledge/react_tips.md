# Knowledge & Gotchas

## Vite & JSX Extensions

- **Problem**: Vite throws a "Pre-transform error" when it encounters JSX syntax inside a `.js` file.
- **Solution**: Always use `.jsx` or `.tsx` extensions for files containing JSX.

## React Props & TypeScript

- **Destructuring**: Use `{ propName }` in function parameters for cleaner code.
- **Optional Props**: Use `?` in interface definitions (e.g., `name?: string`) to make props optional.
- **Default Values**: Combine destructuring with assignment (e.g., `{ name = "Default" }`) to handle missing props.
- **Types**: Use lowercase `string`, `number`, `boolean` for TypeScript types (primitive types).

## State Management & Lifting State Up

- **State vs Props**: Props are for passing data down (immutable), State is for local data that changes (mutable).
- **Lifting State Up**: To share data between siblings, move the state to their common parent.
- **Functions as Props**: Pass a function from parent to child so the child can trigger a state update in the parent (e.g., `onDelete={handleDelete}`).
- **Virtual DOM**: React only updates the parts of the real DOM that changed, making updates fast without full page reloads.
- **Keys**: Always use a unique `key` when rendering lists so React can track elements efficiently.
