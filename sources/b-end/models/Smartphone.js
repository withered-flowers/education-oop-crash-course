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

// Di sini kita mendeklarasikan bahwa yang akan kita "export"
// adalah si class Smartphone itu sendiri.
module.exports = Smartphone;

// Bisa juga kita tuliskan seperti
// module.exports = { Smartphone };

// Bisa juga kita alias-kan
// module.exports = {
//   Hape: Smartphone
// }