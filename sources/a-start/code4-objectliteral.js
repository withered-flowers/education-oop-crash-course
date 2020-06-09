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

// Buat object literal

console.log(samsulS10);
console.log(siomayPocoF2);
// Panggil object literal

console.log(samsulS10.showSpec());
console.log(siomayPocoF2.showSpec());
//Panggil function object literal