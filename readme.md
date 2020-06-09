## Table of Content
1. [Prelude Object](#prelude-oop)
1. [What is OOP?](#what-is-oop)
1. [Why OOP?](#why-oop)
1. [OOP How To](#oop-how-to)
1. [Method Chaining](#method-chaining)
1. [Module exports](#module-exports)
1. [Postlude - fs Module](#postlude---fs-module)
1. [Reference](#reference)

## Prelude Object
Berdasarkan info statistik dari bankmycell, pada Juni 2020, 44.98% di dunia 
punya `smartphone`, dan tentunya ini termasuk kita bukan? Jadi mari kita coba 
lihat, breakdown spesifikasi dari sebuah `smartphone`: 

Smartphone umumnya memiliki: 
* `CPU` seperti snapdragon atau exynos dsb, 
* `Memory` atau `RAM` 512MB, 1GB, 2 GB atau 4GB dst 
* `Storage` atau `Capacity` 16GB, 32GB, 64GB dst

Contoh:
Samsul S10 punya CPU Ex-nose 9820, RAM 8GB, Storage 128GB
Siomay Poco F2 punya CPU DS865, RAM 6GB, Storage 256GB

Benar kan yah umumnya seperti ini?  
Tanpa kita sadari, kita sudah berhasil mengelompokkan `smartphone` berdasarkan
orientasi pada objek loh !  
Dalam terminologi `ngoding`, hal ini disebut dengan 
`Pemrograman Berorientasi Objek` atau `Object Oriented Programming` (OOP)

## What is OOP?
Object Oriented Programming atau Pemrograman Berorientasi Objek, adalah sebuah 
mata kuliah dalam program studi teknik informatika yang terdiri dari 14 kali 
pertemuan #eh bercanda !  

Penjelasan panjang lebar nya:  
Paradigma atau model atau konsep dalam pemrograman yang mendefinisikan desain 
dari *software* dalam bentuk `objek` sesuai dengan keadaan nyata, bukan dalam 
bentuk fungsi dan logika **saja**.  

Dalam OOP, kita perlu tahu tentang 2 hal dasar ini: `Class` dan `Object`  

`Object` adalah entitas yang membungkus data dan sifat, dimana data ini umumnya 
unik antara satu objek dengan objek lainnya.

Contoh dari imajinasi di atas adalah `Samsul S10` atau `Siomay Poco F2`

`Class` adalah sebuah cetak biru atau `blueprint` yang mendefinisikan seluruh 
data yang ada, disebut dengan `property` dan seluruh fungsi-fungsi yang ada 
dalamnya (disebut dengan `method`).

Contoh dari imajinasi di atas adalah sebuah class `Smartphone` yang memiliki
`property` berupa `CPU`, `Memory`, dan `Storage`, dan mungkin sebuah 
`Smartphone` bisa memiliki `method` yang sama, seperti, `bisaNyala`, 
`bisaDisentuh`, `swipeLeftorRight`, dst.

Nah setelah mengetahui hal ini, mari kita coba untuk membuat secara
programatis dalam Javascript

## OOP How To
Dengan kasus yang sama di atas, tentang `Smartphone`, maka cara membuatnya 
adalah:

### Code 01
```javascript
// Definisikan blueprintnya
class Smartphone {
// settng property
  constructor() {
// Untuk mendefinisikan property / variabel baru pada class,
// gunakan keyword `this.namaVariabel`
    this.cpu;
    this.memory;
    this.storage;
  }

// Method 1
  bisaNyala() { }
// Method 2
  bisaDisentuh() { }
// Method 3
  swipeLeft() { }
// Method 4
  swipeRight() { }
}

// Disini ada keyword new,
// Yang artinya kita menginginkan variabel
// samsulS10 dan siomayPocoF2 ini memiliki class Smartphone
let samsulS10 = new Smartphone();
let siomayPocoF2 = new Smartphone();

console.log(samsulS10);
console.log(siomayPocoF2);
```

### Output 01
```
Smartphone {}
Smartphone {}
```

Selamat, dengan begini kita sudah mulai berhasil menggunakan OOP, wow !!!  
Output pada console lognya sudah menunjukkan bahwa variable yang 
di-console-kan sudah mengarah ke class `Smartphone`.

Hanya saja, terlihat bukan? propertynya tidak nongol !
bagaimana cara kita meng-`set`nya?

Mari kita modifikasi kode sebelumnya:

### Code 02
```javascript
class Smartphone {
// Constructor adalah sebuah method yang akan 
// dipanggil pada saat membuat sebuah object atau 
// disebut juga dengan meng-instantiate class.
// Bisa menerima parameter
  constructor(cpu, memory, storage) {
// Ingat bahwa parameter yang ada di dalam  ( ... ) berbeda
// dengan property yang ada di dalam constructor.
// Sehingga kalau ingin "dumasukkan", ya harus di set dengan `=`
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
  }

  bisaNyala() { }
  bisaDisentuh() { }
  swipeLeft() { }
  swipeRight() { }
}
  
// Ingat bahwa pada saat membuat / menginstantiate class Smartphone
// yang sebenarnya dilakukan adalah memanggil method
// constructor dalam class ini
// Karena constructor adalah sebuah method / function
// maka parameternya sesuka kita aturnya bagaimana !
let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB');
let siomayPocoF2 = new Smartphone('DS865', '6 GB', '256 GB');

console.log(samsulS10);
console.log(siomayPocoF2);
```

### Output 02
```
Smartphone { cpu: 'Ex-nose 9820', memory: '8 GB', storage: '128 GB' }
Smartphone { cpu: 'DS865', memory: '6 GB', storage: '256 GB' }
```

Sekarang kita sudah berhasil untuk untuk mendefinisikan `constructor` pada
class `Smartphone` dengan baik, `property` nya sudah bisa kita `set`, nah 
sekarang kita akan melanjutkannya dengan membuat `method` atau function 
di dalam class `Smartphone`

### Code 03
```javascript
class Smartphone {
  constructor(cpu, memory, storage) {
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
  }

  bisaNyala() { }
  bisaDisentuh() { }
  swipeLeft() { }
  swipeRight() { }

// Misalnya kita akan membuat sebuah method yang akan menuliskan
// spesifikasi Smartphone yang sudah dibuat
  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB');
let siomayPocoF2 = new Smartphone('DS865', '6 GB', '256 GB');

console.log(samsulS10);
console.log(siomayPocoF2);

console.log(samsulS10.showSpec());
console.log(siomayPocoF2.showSpec());
```

### Output 03
```
CPU: Ex-nose 9820, Memory: 8 GB, Storage: 128 GB
CPU: DS865, Memory: 6 GB, Storage: 256 GB
```

## Why OOP?
Misalnya, berdasarkan contoh sebelumnya, kita ingin menambahkan sebuah object
literal dengan nama samsulS20

### Code 04
```javascript
class Smartphone {
  constructor(cpu, memory, storage) {
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
  }

  bisaNyala() { }
  bisaDisentuh() { }
  swipeLeft() { }
  swipeRight() { }

  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB');
let siomayPocoF2 = new Smartphone('DS865', '6 GB', '256 GB');

// object literal
const samsulS20 = {
  cpu: 'Ex-nose 990',
  memory: '8 GB',
  storage: '128 GB',
  bisaNyala: function() { },
  bisaDisentuh: function() { },
  swipeLeft: function() { },
  swipeRight: function() { },
  showSpec: function() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`; 
  }
};

console.log(samsulS10);
console.log(siomayPocoF2);
console.log(samsulS20);

console.log(samsulS10.showSpec());
console.log(siomayPocoF2.showSpec());
console.log(samsulS20.showSpec());
```

### Output 04
```
CPU: Ex-nose 9820, Memory: 8 GB, Storage: 128 GB
CPU: DS865, Memory: 6 GB, Storage: 256 GB
CPU: Ex-nose 990, Memory: 8 GB, Storage: 128 GB
```

Sekilas terlihat sama kan? Kalau begini buat apa OOP ? (╯°□°）╯︵ ┻━┻  
Eits, tunggu dulu, sekarang kita coba berpikir, `Smartphone` di dunia
ini ada BANYAK sekali, dengan tiap tahun ada penambahan fiturnya bukan?

Bagaimana bila suatu saat kita akan menambahkan fitur yang belum ada
sebelumnya? 

Misal: Fitur `NFC` dalam suatu `Smartphone` yang kekinian?

Kalau kita menggunakan class `Smartphone` kita tinggal menambahkan
sebuah `property` barunya saja di `constructor`

```javascript
class Smartphone {
// Tinggal tambahkan di constructor dengan default value
  constructor(cpu, memory, storage, isNFCEnabled = false) {
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
// Dan tambahkan sebuah property baru
    this.isNFCEnabled = isNFCEnabled;
  }

  bisaNyala() { }
  bisaDisentuh() { }
  swipeLeft() { }
  swipeRight() { }

  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB', true);
let siomayPocoF2 = new Smartphone('DS865', '6 GB', '256 GB');

// object literal
const samsulS20 = {
  cpu: 'Ex-nose 990',
  memory: '8 GB',
  storage: '128 GB',
  // kita tambahkan di sini
  isNFCEnabled: true,
  bisaNyala: function() { },
  bisaDisentuh: function() { },
  swipeLeft: function() { },
  swipeRight: function() { },
  showSpec: function() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`; 
  }
};

console.log(samsulS10);
console.log(siomayPocoF2);
console.log(samsulS20);

console.log(samsulS10.showSpec());
console.log(siomayPocoF2.showSpec());
console.log(samsulS20.showSpec());
```

Nah sekarang bayangkan bila kita membuat `Smartphone` secara object literal 
seperti `samsulS20` di atas, bila ada 100 object literal seperti itu, dan ada
penambahan property yang baru, maka kita harus menambahkannya satu per satu 
bukan?

Selain itu juga, pada saat kita melakukan console log terhadap semuanya, maka
method / function nya juga terlihat bukan?

Oleh karena itu dengan OOP memiliki beberapa keuntungan seperti:
1. Kita melihat sebuah `Object` sebagai suatu data yang unik, bukan kumpulan 
dari data dan fungsi.
2. Fleksibilitas
3. Kemudahan dalam membaca kode, sehingga editnya (maintain)nya lebih mudah.
4. Simple kan? karena kita bawa dari konsep dunia nyata ke dalam bentuk koding.
5. Seperti layaknya `method` yang bisa jadi tak terlihat, nanti ke depannya
   juga `property` bisa kita sembunyikan sehingga tidak terlihat.
6. Mau nambah `property`? tinggal tambah di `class` nya saja bukan dan semua
   `object` yang menginstantiate class tersebut akan mengikuti penambahan tsb.
7. Di dalam dunia perbankan sendiri, yang masih *heavily relied* on Java, 
   **OOP is a must** ! karena Java adalah sebuah bahasa yang sangat bergantung
   pada OOP dengan segala macam karakteristiknya.

## Method Chaining
Masih ingat pada saat menggunakan `array` ?
Kita bisa kan menggabungkan `array.split()` kemudian kita gabungkan dengan
`array.join()` sehingga menjadi `array.split().join()` ?

Hal ini disebut dengan `Method Chaining`, nah dalam OOP ini pun, kita bisa loh
menggunakan `Method Chaining` tersebut.

Misalnya pada class `Smartphone` sekarang kita ingin menggunakan `method`
`swipeLeft` dan `swipeRight` serta sebuah method baru `swipeAll` untuk 
mencetak `left` dan `right` dengan menggunakan `Method Chaining`

### Code 05
```javascript
class Smartphone {
  constructor(cpu, memory, storage, isNFCEnabled = false) {
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
    this.isNFCEnabled = isNFCEnabled;

// Kita tambahakan property baru
    this.kiri;
    this.kanan;
  }

  bisaNyala() { }
  bisaDisentuh() { }

// Method swipe left diberlakukan
  swipeLeft(kiri) { 
    this.kiri = kiri;
  }
  
// Method swipe right diberlakukan
  swipeRight(kanan) { 
    this.kanan = kanan;
  }

// Method baru untuk cetak kiri kanan
  swipeAll() {
    console.log(`kiri: ${this.kiri} dan kanan: ${this.kanan}`);
  }

  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB', true);

// Cara mengunakan method chaining
samsulS10.swipeLeft("Hello")
  .swipeRight("World")
  .swipeAll();
```

### Output 05
```
TypeError: Cannot read property 'swipeRight' of undefined
```

Hal ini terjadi, karena setelah menggunakan swipeLeft, kita tidak mengembalikan
apa-apa, sehingga yang terjadi adalah pada swipeRight adalah
`undefined.swipeRight` sehingga terjadilah error tersebut.

Untuk bisa menggunakan `Method Chaining` maka kita butuh mengembalikan sesuatu.
Tapi apakah yang dikembalikan? cukup dengan mengembalikan `ini` saja.

Kata kunci untuk menggunakan `Method Chaining` adalah `return this`

### Code 06
```javascript
class Smartphone {
  constructor(cpu, memory, storage, isNFCEnabled = false) {
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
    this.isNFCEnabled = isNFCEnabled;

    this.kiri;
    this.kanan;
  }

  bisaNyala() { }
  bisaDisentuh() { }

  swipeLeft(kiri) { 
    this.kiri = kiri;
// Kembalikan si `ini`
    return this;
  }
  
  swipeRight(kanan) { 
    this.kanan = kanan;
// Kembalikan si ini
    return this;
  }

  swipeAll() {
    console.log(`kiri: ${this.kiri} dan kanan: ${this.kanan}`);
// Apakah masih butuh kembalian?
// Tentunya tidak ! karena ini sudah paling terakhir bukan?
  }

  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB', true);

// Cara mengunakan method chaining
samsulS10.swipeLeft("Hello")
  .swipeRight("World")
  .swipeAll();
```

### Output 06
```
kiri: Hello dan kanan: World
```

## Module exports
Dalam menuliskan `class` rasa-rasanya tidak *afdol* kalau dituliskan nya 
dalam sebuah file utama saja. Umumnya `class` dipisah dalam file yang berbeda.

Nah dalam `javascript` ini juga, kebetulan kita juga bisa memisahkan `class`
ke dalam file lainnya kemudian disambungkan kembali ke file utama, dengan 
menggunakan `module.exports`.

dan Umumnya lagi, untuk `class` di dalam javascript ini ditaruh dalam sebuah
folder yang bernama `models`

Contoh:

### Code 07
```
// File: models/Smartphone.js
class Smartphone {
  constructor(cpu, memory, storage, isNFCEnabled = false) {
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
    this.isNFCEnabled = isNFCEnabled;

    this.kiri;
    this.kanan;
  }

  bisaNyala() { }
  bisaDisentuh() { }

  swipeLeft(kiri) {
    this.kiri = kiri;
    // Kembalikan si `ini`
    return this;
  }

  swipeRight(kanan) {
    this.kanan = kanan;
    // Kembalikan si ini
    return this;
  }

  swipeAll() {
    console.log(`kiri: ${this.kiri} dan kanan: ${this.kanan}`);
    // Apakah masih butuh kembalian?
    // Tentunya tidak ! karena ini sudah paling terakhir bukan?
  }

  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}

// Di sini kita mendeklarasikan bahwa yang akan kita "export"
// adalah si class Smartphone itu sendiri.
module.exports = Smartphone;

// Bisa juga kita uliskan seperti
// module.exports = { Smartphone };

// Bisa juga kita alias-kan
// module.exports = {
//   Hape: Smartphone
// }

// File: index.js
const Smartphone = require('./models/Smartphone.js');
// const { Smartphone } = require('./models/Smartphone.js');
// const { Hape } = require('./models/Smartphone.js');

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB', true);

// Cara mengunakan method chaining
samsulS10.swipeLeft("Hello")
  .swipeRight("World")
  .swipeAll();
```

## Postlude - fs Module
Bahan terakhir ...  
Wuih panjang juga yah ^_^

Karena javascript yang kita gunakan adalah javascript yang bukan biasa, alias
menggunakan `nodejs`, maka kita bisa menggunakan banyak sekali built-in module
yang sudah disediakan. 

Salah satunya adalah module `fs` a.k.a `file system`.

Nah kalau kita baca dari dokumentasinya ini, function yang bisa digunakan
bisa *naujubilah* banyaknya, oleh karena itu akan diajarkan sebuah function
yang bisa mempermudah hidup kalian untuk membaca sebuah file.

Yaitu: `fs.readFileSync`.

Mari kita coba membedah dokumentasi dari readFileSync ini.

`fs.readFileSync(path[, options])`

* `path` `<string>` or `<Buffer>` or `<URL>` or `<integer>` 
  filename or file descriptor
* `options` `<Object>` | `<string>`
  * `encoding` `<string>` or `<null>` Default: `null`
  * `flag` `<string>` See support of file system flags. Default: `'r'`. 

Returns: `<string>` or `<Buffer>`

Jadi bagaimanakah cara menggunakannya?

### Code 08
```javascript
// Di sini kita menggunakan require untuk module fs
const fs = require('fs');

// Misalnya nama filenya ada susah.csv
// Liat yah di dokumentasi fungsinya, ada sesuatu yang direturn.
let variablePenampungData = fs.readFileSync('susah.csv');

// Kita cetak outputnya
console.log(variablePenampungData);
```

### Output 08
```
<Buffer 6e 61 6d 61 2c 63 70 75 2c 6d 65 6d 6f 72 79 2c ... 62 more bytes>
```

Nah loh, kok outputnya seperti ini?
Beda sekali yah dengan harapan kita?

Nah kita lihat lagi, returns `<string>` | `<Buffer>`

Yang direturn adalah buffer, sekarang kita ingin mencoba untuk me-return string

Bagaimanakah caranya?

Ya, dengan memanfaatkan `options - encoding` nya !

Untuk encoding ini sendiri, sebenarnya yang bisa digunakan bisa ada banyak 
pilihannya, dapat dilihat pada code di `nodejs` Buffer 
[ini](https://github.com/nodejs/node/blob/master/lib/buffer.js#L600)

### Code 09
```javascript
const fs = require('fs');

let variablePenampungData = fs.readFileSync('susah.csv', {
  encoding: 'utf8'
});

console.log(variablePenampungData[0]);
```

### Output 09
```
nama,cpu,memory,storage
Samsul S10,Ex-nose 9820,8 GB,128 GB
DS865,6 GB,256 GB
Samsul S20,Ex-nose 990,8 GB,128 GB
```

Selamat Anda sudah berhasil membaca data dengan menggunakan `fs`.  
*clap* *clap* *clap* 

Kemudian bagaimana kalau kita ingin memasukkan ke dalam array atau 
di-akal-akalin lagi supaya bisa masuk ke dalam `property` dalam `class` ?

Nah kalau itu, dijabarkan sendiri yah !

Hint:
`String manipulation` dan `Array manipulation`

## Reference
1. [Mobile Phone statistic June 2020, bankmycell](https://www.bankmycell.com/blog/how-many-phones-are-in-the-world)
1. [Object-Oriented Programming, Wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming)
1. [NodeJS - fs - readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)
1. [NodeJS - encoding support - encodingOps](https://github.com/nodejs/node/blob/master/lib/buffer.js#L600)