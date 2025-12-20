import { EmailValidator } from './EmailValidator';
import type { alphanumeric } from './Types';
import ZipCodeValidator from './ZipCodeValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

let z = new ZipCodeValidator();
let result2 = validator.isValid('95134');

console.log(result); // true