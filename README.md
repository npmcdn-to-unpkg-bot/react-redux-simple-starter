# React Redux Simple Starter

A simple boilerplate to get you up and running quickly with React and Redux.
This boilerplate provides a powerful build system with webpack, routing,
Sass support, unit testing, linting, and more. The goal of this project is to
provide structure and demonstrate a very simple application that is easy to
expand on.

## Table of Contents
1. [Getting Started](#getting-started)
1. [Technology Stack](#technology-stack)
1. [Application Structure](#application-structure)

## Requirements
* [Node.js 6.0+](http://nodejs.org)

## Getting Started
```bash
$ git clone https://github.com/laaksonen/react-redux-simple-starter.git
$ cd react-redux-simple-starter
$ npm install
$ npm run dev
```
While developing, you will probably mostly rely on ``npm run dev``; however, there
are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to `~/static/dist`.|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`dev:no-debug`|Same as `npm run dev` but disables devtool instrumentation.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Technology Stack

| **Technology** | **Description** |
| ---------|-----------------|
| [React](https://facebook.github.io/react/) | View |
| [React Router](https://github.com/reactjs/react-router) | Routing |
| [Redux](http://redux.js.org/) | Client-side cache |
| [Lodash](https://lodash.com/) | Utility |
| [Babel](https://babeljs.io/) | JavaScript compiler |
| [Webpack](https://webpack.github.io/) | Build system |
| [Express](http://expressjs.com/) | Development server |
| [Mocha](https://mochajs.org/) | Testing |
| [ESLint](http://eslint.org/) | Linting |

## Application Structure
The aim is to mostly group functionality by feature rather than file type. We
call new features modules and keep them in the modules folder.
```
.
├── bin                       # Start scripts
├── config                    # Build related configuration
├── server                    # Express server with webpack middleware
├── src                       # Application source code
│   ├── components            # Components that aren't part of any module
│   ├── containers            # Container components that aren't part of any module
│   ├── modules               # Modules that add functionality to the application
│   │   ├── counter           # A simple counter module
│   │   │   ├── components    # Counter components
│   │   │   ├── views         # Views are components that map to routes
│   │   │   └── counter.js    # Constants, reducer, and actions for counter
│   │   └── landing           # Landing page module
│   ├── redux                 # Redux specific files
│   │   ├── configureStore    # Create a redux store
│   │   └── rootReducer       # Combine all reducers
│   ├── routes                # Route definitions for react-router
│   ├── styles                # Sass styling for project
│   ├── views                 # Views that aren't part of any module
│   └── index.js              # Entry point for the application
├── static                    # All files that are used in production
│   ├── assets                # Project assets
│   ├── (dist)                # Source code will be bundled and output here by webpack
│   └── index.html            # Entry point for the browser
└── test                      # Unit tests
```

## Contributing
I am more than happy to accept any external contributions to the project in the
form of feedback, bug reports, or even better - pull requests.

## License
MIT
