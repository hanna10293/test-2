for (let index = 0; index < 10; index++) {
    basic.setLedColor(0xb09eff)
    basic.showIcon(IconNames.Tortoise)
}
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        . . . # .
        . # # . .
        . . . # .
        . . . . .
        `)
})
