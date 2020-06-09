## Table of Content
1. [Prelude Object](#prelude-oop)
1. [What is OOP?](#what-is-oop)
1. [Why OOP?](#why-oop)
1. [OOP How To](#oop-how-to)
1. [Method Chaining](#method-chaining)
1. [Module exports](#module-exports)
1. [fs Module](#fs-module)
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
Samsul S10 punya CPU Ex-nose 9820, RAM 8GB, Storage 128 GB
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
dari *software* dalam bentuk `objek` sesuai dengan keadan nyata, bukan dalam 
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

## Why OOP?
Misalnya, berdasarkan contoh sebelumnya, kita ingin menambahkan sebuah object
literal dengan nama samsungS20

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
  }

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB');
let siomayPocoF2 = new Smartphone('DS865', '6 GB', '256 GB');

// object literal
const samsungS20 = {
  cpu: 'Ex-nose 990',
  memory: '8 GB',
  storage: '128 GB',
  bisaNyala: () => { console.log() }
};



```

## Method Chaining


## Module exports


## fs Module


## Reference
1. [Mobile Phone statistic June 2020, bankmycell](https://www.bankmycell.com/blog/how-many-phones-are-in-the-world)
1. [Object-Oriented Programming, Wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming)