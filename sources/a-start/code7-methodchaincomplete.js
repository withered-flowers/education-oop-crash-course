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
  }
  
  swipeRight(kanan) { 
    this.kanan = kanan;
// Kembalikan si ini
  }

  swipeAll() {
    console.log(`kiri: ${this.kiri} dan kanan: ${this.kanan}`);
// Apakah masih butuh kembalian?
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