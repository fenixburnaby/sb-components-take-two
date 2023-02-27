# sb-components-take-two

This repo intends to present an example of how to create a custom component library that can provide a package for UMD uses and npm installation. The library wraps MUI v5, 
so it can handle creating compilations of components, pure custom ones, or export the ones MUI provides.

The project is intended to use Typescript and Storybook to display its content. Although a local server can be started using Webpack, and the idea is to have a sandbox of sorts
 in case something needs to be tested on the fly during development.
 
 ## Starting the sandbox
 
 Run `npm start` and it will use the webpack dev server and display what the `src/index.js` contains.
 
 ## Using [Storybook](https://storybook.js.org/)
 
 A local Storybook server can be started by running `npm run storybook`. 
 
 Also, it is possible to create a version that can be placed on a server. Execute `npm run storybook:export` and it should  provide the necessary files to deploy it.
 
 ## Creating distribution bundles
 
 The distribution versions use [Rollup](https://rollupjs.org/) to compile different versions of the library.
 
 Run `npm run build:rollup` to build using the default configuration. This would create the following files on the `dist` folder at the root:
 
 - A UMD file that be directly imported in a simple HTML project file. The process generates development and prod versions of the UMD bundle
 - ESM version that is referenced in `package.json` as the entry point when installing it as an NPM package
 - A CJS version of the bundle
 
 
