# React USWDS Vite Template

## Overview

`react-uswds-vite-template` is a modern React template that integrates the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) with a Vite-powered development environment. This template is designed to streamline the development of government and civic web applications using best practices in frontend development.

## Features

- **Vite-Powered Development**: Provides fast and optimized builds with Vite.
- **React 18**: Supports the latest features of React.
- **USWDS Integration**: Leverages `@uswds/uswds` and `@trussworks/react-uswds` for consistent government-styled UI components.
- **State Management & Data Fetching**:
  - Uses `@tanstack/react-query` for efficient data fetching and caching.
  - `axios` is included for making HTTP requests.
- **Routing**:
  - Powered by `react-router` for easy navigation management.
- **Data Visualization**:
  - Includes `recharts` for creating interactive and customizable charts.
- **Accessibility & Hooks**:
  - Implements `focus-trap-react` for managing focus in modals and dialogs.
  - Provides `beautiful-react-hooks` for cleaner and more maintainable React hooks.
- **Testing & Linting**:
  - Uses `jest` and `@testing-library/react` for comprehensive testing.
  - Configured with `eslint` and `typescript-eslint` for code quality.
- **TypeScript Support**: Built with TypeScript for type safety and maintainability.

## Getting Started

To create your own project using this template, use `degit` to scaffold a project:

```bash
npx degit fronrich-sfi/react-uswds-vite-template#main my-project

cd my-project

# install dependencies
npm install
# or
yarn install
# or
bun install

# run your new app!
npm run dev
# or
yarn run dev
# or
bun run dev
```

### Building for Production

To create a production-ready build, run:

```sh
npm run build
# or
yarn build
# or
bun run build
```

### Previewing the Build

After building, preview the output using:

```sh
npm run preview
# or
yarn preview
# or
bun run preview
```

### Linting

Check for code quality issues with:

```sh
npm run lint
# or
yarn lint
# or
bun run lint
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License.
