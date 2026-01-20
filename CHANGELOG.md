# Changelog

All notable changes to this project will be documented in this file.

## [2026-01-19]

### Added

- New branch `bai-tap-thuc-hanh` for practice exercises.
- `WelcomeCard` component with TypeScript support.

### Changed

- Migrated `WelcomeCard.js` to `WelcomeCard.tsx` to support JSX and TypeScript.
- Refactored `WelcomeCard` to use prop destructuring and default values.
- Updated `App.tsx` to use the refactored `WelcomeCard`.

### Fixed

- Fixed Vite "Pre-transform error" by using correct extensions.
- Fixed typo in variable name `couserName`.

## [2026-01-20]

### Added

- New branch `lesson/props-state-management` for advanced practice.
- `Student Management` system:
  - `src/types.ts`: Shared data structures.
  - `src/StudentList.tsx`: Main state management (Parent).
  - `src/StudentCard.tsx`: Display component (Child).
  - `src/AddStudentForm.tsx`: Input component with local state.
- `src/Counter.tsx`: Simple state practice component.

### Changed

- Refactored `App.tsx` to include modular practice sections.
- Implemented "Lifting State Up" pattern to allow children to update parent state.
