# Playwright TypeScript Framework

## Overview
This is a Playwright framework developed using TypeScript to demonstrate a variety of Playwright automation techniques against the demo website [the-internet.herokuapp.com](https://the-internet.herokuapp.com/upload).

## Features
- Automated UI testing using Playwright
- Supports Chromium, Firefox, and WebKit
- Automatically executes on pull requests
- Parallel test execution
- Retries on CI failures
- HTML reporting
- Tracing enabled on first retry

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed.

```sh
npm install
```

## Running Tests

### Run all tests
```sh
npx playwright test
```

### Run tests in a specific browser
```sh
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View test report
```sh
npx playwright show-report
```

## Project Structure
```
/playwright-typescript-framework
│── tests/                  # Playwright test files
│── playwright.config.ts    # Playwright configuration
│── package.json            # Project dependencies and scripts
```
## Troubleshooting
- Ensure Playwright dependencies are installed correctly: `npx playwright install`
- Run tests with debug mode: `npx playwright test --debug`

## License
This project is licensed under the ISC License.
