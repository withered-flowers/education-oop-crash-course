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

// Panggil methodnya di sini
console.log(samsulS10.showSpec());
console.log(siomayPocoF2.showSpec());