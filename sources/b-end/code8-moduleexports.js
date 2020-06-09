const Smartphone = require('./models/Smartphone.js');
// const { Smartphone } = require('./models/Smartphone.js');
// const { Hape } = require('./models/Smartphone.js');

let samsulS10 = new Smartphone('Ex-nose 9820', '8 GB', '128 GB', true);

samsulS10.swipeLeft("Hello")
  .swipeRight("World")
  .swipeAll();