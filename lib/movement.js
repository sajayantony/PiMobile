// var Gpio = require('onoff').Gpio,
//   pin9  = new Gpio(9, 'out'),
//   pin10 = new Gpio(10, 'out');

// function rightForward(){
//     pin9.writeSync(0);
//     pin10.writeSync(1);
// }

var bot = {

    forward: function () {
        console.log("Moving foward.");
    },
    
    stop: function () {
        console.log("Stopping.")
    },
    
    destroy: function () {
        console.log("Clearning all GPIO pins");
    }
};

module.exports = bot;