# Changelog

All notable changes to this project will be documented in this file.

## [2026-01-19]

### Added

- New branch `bai-tap-thuc-hanh` for practice exercises.
- `WelcomeCard` component with TypeScript support.

## [2026-01-20] - Part 1

### Added

- New branch `lesson/props-state-management` for advanced practice.
- `Student Management` system:
  - `src/types.ts`: Shared data structures.
  - `src/StudentList.tsx`: Main state management (Parent).
  - `src/StudentCard.tsx`: Display component (Child).
  - `src/AddStudentForm.tsx`: Input component with local state.
- `src/Counter.tsx`: Simple state practice component.

### Changed

- Implemented "Lifting State Up" pattern.

## [2026-01-20] - Part 2

### Added

- New branch `lesson/static-props-app` for Static Content & Props study.
- `TechVibe Landing Page`:
  - `src/siteData.ts`: Centralized static data.
  - `src/components/Navbar.tsx`, `Hero.tsx`, `FeatureCard.tsx`, `Footer.tsx`.
- Implemented list rendering using `.map()` with unique `key` props.

### Changed

- Refactored `App.tsx` into a modular Landing Page.
