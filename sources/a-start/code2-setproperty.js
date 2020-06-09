/**
Smartphone umumnya memiliki: 
* `CPU` seperti snapdragon atau exynos dsb, 
* `Memory` atau `RAM` 512MB, 1GB, 2 GB atau 4GB dst 
* `Storage` atau `Capacity` 16GB, 32GB, 64GB dst

Contoh:
Samsul S10 punya CPU Ex-nose 9820, RAM 8GB, Storage 128GB
Siomay Poco F2 punya CPU DS865, RAM 6GB, Storage 256GB
**/

// set property dari Smartphone dan instance object dengan baik dan benar
class Smartphone {
  constructor() {
    this.cpu;
    this.memory;
    this.storage;
  }

  bisaNyala() { }
  bisaDisentuh() { }
  swipeLeft() { }
  swipeRight() { }
}

let samsulS10 = new Smartphone();
let siomayPocoF2 = new Smartphone();

console.log(samsulS10);
console.log(siomayPocoF2);