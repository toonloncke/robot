radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 10; index++) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 5)
    }
})
input.onButtonPressed(Button.A, function () {
    let afstand = 0
    while (afstand > 50) {
        for (let index = 0; index < 100; index++) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
        }
    }
    for (let index = 0; index < 4; index++) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 10)
    }
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 10; index++) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 5)
    }
})
basic.forever(function () {
	
})
