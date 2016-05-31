var Gpio = require('onoff').Gpio,
  pin9  = new Gpio(9, 'out'),
  pin10 = new Gpio(10, 'out');


pin9.writeSync(0);
pin10.writeSync(1);

process.on('SIGINT', function () {
  pin9.unexport();
  pin10.unexport();
});
