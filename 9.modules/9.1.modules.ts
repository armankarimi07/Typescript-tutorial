// export using export
// import using import

// added a new module called Validator.ts, inside it an interface named Validator is declared

// to consume a module, you use the import statement,
// in EmailValidator.ts module, we consume (import) the Validator.ts module
// you can also rename it while importing

// then we use the EmailValidator module in App.ts

// types can also be exported/imported
// by using export type and import type (since ts 3.8)

// to import everything from a module:
// import * from 'module_name';


// Re-exports
// added ZipCodeValidator.ts

// we can wrap the EmailValidator and ZipCodeValidator modules in a new module by combining all their exports using the following syntax:
// export * from 'module_name';
// put them into one module named FormValidator.ts
// export * from "./EmailValidator";
// export * from "./ZipCodeValidator";


// ts allows each module to have one default export
// by using the default keyword
// added it to ZipCodeValidator.ts

// to import a default export, use the following syntax:
// import default_export from 'module_name';
// updated App.ts for this