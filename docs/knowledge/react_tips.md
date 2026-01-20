# Knowledge & Gotchas

## Vite & JSX Extensions

- **Problem**: Vite throws a "Pre-transform error" when it encounters JSX syntax inside a `.js` file.
- **Solution**: Always use `.jsx` or `.tsx` extensions for files containing JSX.

## React Props & TypeScript

- **Destructuring**: Use `{ propName }` in function parameters for cleaner code.
- **Optional Props**: Use `?` in interface definitions (e.g., `name?: string`) to make props optional.
- **Default Values**: Combine destructuring with assignment (e.g., `{ name = "Default" }`) to handle missing props.
- **Types**: Use lowercase `string`, `number`, `boolean` for TypeScript types (primitive types).

## List Rendering & Key Prop

- **.map()**: The standard way to render collections of data into components.
- **Key Prop**: Mandatory unique identifier for each item in a list. Helps React's Virtual DOM track changes efficiently.
- **Spread Operator (`{...item}`)**: Quick way to pass all properties of an object as props if names match.

## Project Structure (Best Practices)

- **siteData.ts**: Keep static content in a separate data file to keep UI logic clean.
- **components/**: Keep UI pieces in a dedicated folder for better organization.
