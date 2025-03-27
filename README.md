# Trak-iT API Commands Definition

The Trak-iT APIs use the same command definitions for all HTTPS, RESTful, and WebSocket commands.  For example, a "get icon" command in the RESTful service will return a JSON definition of the icon, whereas the same command to the Imaging service will return a PNG.
Other Trak-iT API libraries are available on GitHub.
https://github.com/trakitwireless

### Prerequisites

The `@trakit/objects` package is required as most `Response` classes will contain an object defined in that library.  

### Building

In order to build this project, you need to install the RollupJS, and plugins for TypeScript and Minifying.
```
npm i rollup rollup-plugin-typescript2 @rollup/plugin-terser
```
After those have been installed, build the project normally.
```
rollup --config commands/rollup.config.js
```

## Questions and Feedback

If you have any questions, please start for the project on GitHub
https://github.com/trakitwireless/trakit-dotnet/issues
