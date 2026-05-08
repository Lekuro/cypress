# Cypress Test Automation - Telnyx

This project contains automated end-to-end tests for the Telnyx website using Cypress and the Page Object Model (POM) pattern.

## Project Description
The goal of this project is to verify the core functionality of the Telnyx website, including navigation, page loading, and key UI elements. Tests are designed to be maintainable and scalable by following best practices like POM, custom commands, and fixtures.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Cypress](https://www.cypress.io/)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

You can use the following commands to run tests in different modes:

### 1. Interactive Mode (Cypress Test Runner)
Recommended for development and debugging.
```bash
npm run cy:open
```

### 2. Headless Mode
Fast execution in the console without opening a browser (ideal for CI/CD).
```bash
npm run cy:run
```

### 3. Run with Custom Configuration
Run tests using an alternative configuration file.
```bash
npm run cy:run:custom
```

### 4. Standard Test Command
Runs the full suite in headless mode.
```bash
npm test
```
