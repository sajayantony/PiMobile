var isArm = true;
var pin7, pin8, pin9, pin10;

function setup() {
    console.log(process.arch)
    if (isArm) {
        return;
    }
    var Gpio = require('onoff').Gpio;

    pin7 = new Gpio(7, 'out');
    pin8 = new Gpio(8, 'out');
    pin9 = new Gpio(9, 'out');
    pin10 = new Gpio(10, 'out');
}
function leftForward() {
    if (isArm) {
        return;
    }
    pin7.writeSync(0);
    pin8.writeSync(1);
}

function rightForward() {
    if (isArm) {
        return;
    }
    pin9.writeSync(0);
    pin10.writeSync(1);
}

function stop() {
    if (isArm) {
        return;
    }
    pin7.writeSync(0);
    pin8.writeSync(0);
    pin9.writeSync(0);
    pin10.writeSync(0);
}

function forward() {
    rightForward();
    leftForward();
}

setup();

var bot = {

    forward: function () {
        console.log("Moving foward.");
        forward();
    },

    stop: function () {
        console.log("Stopping.")
        stop();
    },

    destroy: function () {
        console.log("Clearning all GPIO pins");
    }
};

module.exports = bot;