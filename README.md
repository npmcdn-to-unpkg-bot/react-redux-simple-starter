# React Redux Simple Starter

## About


## Application Structure

```
.
├── bin                     # Start scripts
├── config                  # Build related configuration
├── server                  # Express server with webpack middleware
├── src
│   ├── components          # Basic components that aren't party of any module
│   ├── containers          # Basic containers that aren't party of any module
│   ├── modules             # Modules that add functionality to the application
│   │   ├── counter         # A simple counter module
│   │   │   ├── components  # Counter components
│   │   │   ├── views       # Views are components that map to routes
│   │   │   └── counter.js  # Counter constants, reducer, and actions
│   │   └── landing         # Landing page module
```

## License
MIT
