// How to automate the workflow for development of node.js applications using typescript?

// install node.js

// install typescript and ts-node pacakges globally
// cmd> npm install -g typescript ts-node

// typescript is a compilter
// ts-node allows for directly running ts code on node.js without precompiling to js first

// install nodemon package to monitor the changes and auto restart
// cmd> npm install -g nodemon

// create a new directory called nodets
// mkdir nodets
// cd nodets

// create a package.json
// npm init --yes

// create src folder 

// create app.ts inside src

// create nodemon config file:
/*
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/app.ts",
  "scripts": {
   "start": "nodemon"
    },
}
*/

// file instructs nodemon to watch for code changes in src dir, and files with ts and js exetension
// and which file to execute upon nodemon command


// to start the application:
// npm start