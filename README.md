# React Redux Simple Starter

## About


## Application Structure
The aim is to group functionality mostly by feature rather than file type. New
features are called modules and are contained in the modules folder.

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

## License
MIT
