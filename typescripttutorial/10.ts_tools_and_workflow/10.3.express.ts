// refer to express-project folder

// create a project folder
// initialize a node project

// > npm init -y or npm init --yes

// install express package
// npm install express

// install development dependencies
// > npm i -D @types/express @types/node
// (this is type definitions for express and node.js)

// update type to module in package.json

// update the start script
// "start": "npx tsx --env-file=.env --watch  src/index.ts"
// this will start src/index.ts, loads .env file and autorestarts the server if files are changed
// npx tsx - uses the tsx runner for node.js
// --env-file=.env - loads environment variables from .env file
// --watch - watches for file changes


// run:
// > npm start