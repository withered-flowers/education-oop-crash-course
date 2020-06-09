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