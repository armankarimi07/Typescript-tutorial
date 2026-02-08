// vite is a frontend build tool that offers fast and leaner dev experience.

// node.js must be installed

// create a vite project
// > npm create vite@latest

// this will ask to install the create-vite package first
// then it will initialize a vite project
// which is just a regular node.js project with vite added to it

// create-vite package will ask you some questions to scaffold a project based on your preference

// navigate project directory (created by create-vite)

// install dependencies
// > npm install

// run the dev server
// > npm run dev

// there are some files in the project folder

/*
index.html - entry point for app, includes the src/main.ts file
(during development, vite will compile the src/main.ts into js bundle, and inject it to index.html)
src/main.ts - entry point for application
style.css - stores css code
(You can import CSS files into your app like js files, by using import statement. because of the way vite handles asset bundling and processing, you don't have to manually link stylesheets in html)
package.json - manages dependencies, scripts, and configurations
node_modules/ - contains all installed npm packages and their dependencies.
tsconfig.json - contains typescript configurations for typescript compiler (how it should behave).
*/

// build the project:
// > npm run build

// this command will create an optimized production build in the dist folder

// to preview the production build locally, use the following command:
// > npm run preview

