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