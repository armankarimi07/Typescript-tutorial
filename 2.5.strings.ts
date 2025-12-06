// js, ts use single quotes and double quotes to surround string literals
let firstName: string = 'John';
let title: string = "Web Developer";

// backtick `` are template strings
let description = `This TypeScript string can 
span multiple 
lines
`;

// string interpolation to embed variables inside string templates
// ignore dup def errors
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);