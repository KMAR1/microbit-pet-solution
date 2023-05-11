input.onButtonPressed(Button.A, function () {
    if (timer < 15) {
        timer = 0
        basic.showIcon(IconNames.Happy)
        music.playMelody("G B A G C5 B A B ", 120)
        for (let index = 0; index < 3; index++) {
            pins.servoWritePin(AnalogPin.P2, 90)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P2, 0)
            basic.pause(500)
            servos.P2.stop()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    timer = 0
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (timer < 15) {
        timer = 0
        basic.showIcon(IconNames.Happy)
        music.playMelody("G B A G C5 B A B ", 120)
        for (let index = 0; index < 3; index++) {
            pins.servoWritePin(AnalogPin.P2, 90)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P2, 0)
            basic.pause(500)
        }
    }
})
let timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (timer <= 15) {
        if (input.lightLevel() > 100) {
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        }
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 5) {
        basic.showIcon(IconNames.Sad)
    }
    if (timer == 10) {
        basic.showIcon(IconNames.Asleep)
    }
    while (timer > 15) {
        basic.showIcon(IconNames.Skull)
    }
})
