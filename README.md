# React RTKQ

A React + Redux Toolkit PWA kit powered by ViteJS, Redux Toolkit, Chakra UI, Cypress and friends

At a glance:

| Dependency                                                       | Version |
| ---------------------------------------------------------------- | ------- |
| [react](https://reactjs.org/docs/getting-started.html)           | 18.2.0  |
| [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) | 4.4.3   |
| [@chakra-ui/react](https://chakra-ui.com/docs/getting-started)   | 2.2.1   |
| [typescript](https://www.typescriptlang.org/docs/)               | 4.7.4   |
| [axios](https://axios-http.com/)                                 | 0.27.2  |
| [redux-toolkit](https://redux-toolkit.js.org/api/configureStore) | 0.7.3   |
| [react-query](https://react-query.tanstack.com/overview)         | 3.39.1  |
| [react-hook-form](https://react-hook-form.com)                   | 7.32.2  |
| [cypress](https://docs.cypress.io/)                              | 10.1.0  |

## Getting Started

The template is running on Yarn (Yarn v1 as v2 doesn't seem to compatible wit NextJS as of writing) and uses an **.nvmrc** file.

To get started:

- Run `nvm use` to ensure you're running the correct Node version
- Run `yarn` to install dependencies
- After dependencies have been installed, run `yarn dev` to get it up and running locally

## Scripts

| Script        | What it does                                                    |
| ------------- | --------------------------------------------------------------- |
| dev           | starts the application in development mode w/ lint concurrently |
| build         | creates an optimised production build of your application       |
| preview       | runs a preview                                                  |
| preview:https | runs a preview via https protocol                               |
| test:jest     | runs Jest tests                                                 |

For full list of scripts, please refer to the root package.json file

## File Structure

### Overall Structure

```
project
|   .babelrc
|   .eslintrc.js
|   .gitignore
|   .nvmrc
|   .prettierignore
|   prettier.config.js
|   package.json
|   README.md
└───requests
└───components
└───hooks
└───pages
└───store
└───theme
```
