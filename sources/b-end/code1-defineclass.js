/**
Smartphone umumnya memiliki: 
* `CPU` seperti snapdragon atau exynos dsb, 
* `Memory` atau `RAM` 512MB, 1GB, 2 GB atau 4GB dst 
* `Storage` atau `Capacity` 16GB, 32GB, 64GB dst

Contoh:
Samsul S10 punya CPU Ex-nose 9820, RAM 8GB, Storage 128GB
Siomay Poco F2 punya CPU DS865, RAM 6GB, Storage 256GB
**/

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