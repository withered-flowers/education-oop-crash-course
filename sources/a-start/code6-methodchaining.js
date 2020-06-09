class Smartphone {
  constructor(cpu, memory, storage, isNFCEnabled = false) {
    this.cpu = cpu;
    this.memory = memory;
    this.storage = storage;
    this.isNFCEnabled = isNFCEnabled;

// Kita tambahakan property baru kiri dan kanan
  }

  bisaNyala() { }
  bisaDisentuh() { }

// Method swipe left diberlakukan
  swipeLeft() { }
  
// Method swipe right diberlakukan
  swipeRight() { }

// Method baru untuk cetak kiri kanan

  showSpec() {
    return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}`;
  }
}

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB', true);

// Cara mengunakan method chaining