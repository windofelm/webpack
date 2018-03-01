
require('dotenv').config(); // dotenv

console.log(process.env.DB_USER);
console.log(process.env.NODE_ENV);
console.log(process.cwd()); // current working directory of the Node.js process.

process.emitWarning('Something happened!', 'CustomWarning', 'WARN001');
