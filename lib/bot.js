var isArm = process.arch === "arm";
var pin7, pin8, pin9, pin10;

function setup() {
    console.log("Setting up GPIO on a PI with an %s processor" + process.arch)
    if (!isArm) {
        return;
    }
    var Gpio = require('onoff').Gpio;

    pin7 = new Gpio(7, 'out');
    pin8 = new Gpio(8, 'out');
    pin9 = new Gpio(9, 'out');
    pin10 = new Gpio(10, 'out');
}
function leftForward() {
    if (!isArm) {
        return;
    }
    pin7.writeSync(1);
    pin8.writeSync(0);
}

function rightForward() {
    if (!isArm) {
        return;
    }
    pin9.writeSync(0);
    pin10.writeSync(1);
}

function rightBackward() {
    if (!isArm) {
        return;
    }
    pin9.writeSync(1);
    pin10.writeSync(0);
}

function leftBackward() {
    if (!isArm) {
        return;
    }
    pin7.writeSync(0);
    pin8.writeSync(1);
}

function stop() {
    if (!isArm) {
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

function backward() {
    rightBackward();
    leftBackward();
}

function left() {
    rightForward();
    leftBackward();
}

function right() {
    rightBackward();
    leftForward();
}
setup();

var bot = {

    destroy: function () {
        console.log("Clearning all GPIO pins");
        stop();
    },

    doAction: function (action) {

        switch (action) {
            case "forward":
                console.log("Moving foward.");
                forward();
                break;
            case 'back':
                console.log('Moving back.');
                backward();
                break;
            case 'left':
                console.log('Turning left.');
                left();
                break;
            case 'right':
                console.log('Turning right.');
                right();
                break;

            case "stop":
                console.log("Stopping.")
                stop();
                break;

            default:
                bot.stop();
        }
    }
};

module.exports = bot;