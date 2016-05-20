# React Redux Simple Starter

A simple boilerplate to get you up and running quickly with React and Redux.
This boilerplate provides a powerful build system with webpack, routing,
Sass support, unit testing, linting, and more. The goal of this project is to
provide structure and demonstrate a very simple application that is easy to
expand on.

## Table of Contents
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Technology Stack](#technology-stack)
1. [Application Structure](#application-structure)
1. [Deployment](#deployment)
1. [Contributing](#contributing)

## Requirements
* [Node.js 6.0+](http://nodejs.org)

## Getting Started
```bash
$ git clone https://github.com/laaksonen/react-redux-simple-starter.git
$ cd react-redux-simple-starter
$ npm install
$ npm run dev
```
While developing, you will probably mostly rely on ``npm start``; however, there
are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves application with HMR enabled at `localhost:3000`.|
|`dev`|Same as `npm start`.|
|`prod`|Serves compiled application from disk with HMR disabled at `localhost:3000`.|
|`lint`|Lint all `.js` files.|
|`test`|Runs unit tests.|
|`test:dev`|Runs unit tests and watches for changes to re-run tests.|
|`compile`|Compiles the application to `~/static/dist`.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|

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
The aim is to mostly group functionality by feature rather than by file type. All
new features are grouped together in the modules folder.
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

## Deployment

## Contributing
I am more than happy to accept any external contributions to the project in the
form of feedback, bug reports, or even better - pull requests.

## License
MIT
