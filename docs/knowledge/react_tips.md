# Knowledge & Gotchas

## Vite & JSX Extensions

- **Problem**: Vite throws a "Pre-transform error" when it encounters JSX syntax inside a `.js` file.
- **Solution**: Always use `.jsx` or `.tsx` extensions for files containing JSX.

## React Props & TypeScript

- **Destructuring**: Use `{ propName }` in function parameters for cleaner code.
- **Optional Props**: Use `?` in interface definitions (e.g., `name?: string`) to make props optional.
- **Default Values**: Combine destructuring with assignment (e.g., `{ name = "Default" }`) to handle missing props.
- **Types**: Use lowercase `string`, `number`, `boolean` for TypeScript types (primitive types).
