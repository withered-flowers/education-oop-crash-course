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
    return this;
  }

  swipeRight(kanan) {
    this.kanan = kanan;
    return this;
  }

  swipeAll() {
    console.log(`kiri: ${this.kiri} dan kanan: ${this.kanan}`);
  }

  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}
// Jangan lupa export

// Call module export
let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB', true);

samsulS10.swipeLeft("Hello")
  .swipeRight("World")
  .swipeAll();