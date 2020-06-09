/** 
`fs.readFileSync(path[, options])`

* `path` `<string>` or `<Buffer>` or `<URL>` or `<integer>` 
  filename or file descriptor
* `options` `<Object>` | `<string>`
  * `encoding` `<string>` or `<null>` Default: `null`
  * `flag` `<string>` See support of file system flags. Default: `'r'`. 

Returns: `<string>` or `<Buffer>`
**/

// Di sini kita menggunakan require untuk module fs
const fs = require('fs');

// Misalnya nama filenya ada susah.csv
// Liat yah di dokumentasi fungsinya, ada sesuatu yang direturn.
let variablePenampungData = fs.readFileSync('susah.csv', {
  encoding: 'utf8'
});

// Kita cetak outputnya
console.log(variablePenampungData);