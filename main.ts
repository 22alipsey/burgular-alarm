input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 - C5 - C5 - C5 - ", 120)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(9)
    radio.sendString("HELP")
    basic.showString("SENT")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
})
