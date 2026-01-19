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

- Fixed Vite "Pre-transform error" (invalid JS syntax error) by using the correct `.tsx` extension for JSX content.
- Fixed typo in variable name `couserName` -> `courseName`.
- Removed unused `React` imports for cleaner code.
