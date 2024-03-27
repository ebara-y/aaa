basic.forever(function () {
    ioV2.neopixel_blue_block(onoff.ON)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playTone(349, music.beat(BeatFraction.Half))
    ioV2.driveForwards(1)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playTone(349, music.beat(BeatFraction.Half))
    ioV2.driveForwards(1)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playTone(349, music.beat(BeatFraction.Half))
    ioV2.driveForwards(1)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    music.playTone(349, music.beat(BeatFraction.Half))
    ioV2.driveForwards(1)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    music.playTone(349, music.beat(BeatFraction.Half))
    ioV2.driveForwards(1)
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        ioV2.neopixel_blue_block(onoff.ON)
        ioV2.driveForwards(1)
        ioV2.neopixel_blue_block(onoff.OFF)
        ioV2.driveForwards(1)
    }
    ioV2.neopixel_red_block(onoff.ON)
    ioV2.driveForwards(3)
    ioV2.neopixel_red_block(onoff.OFF)
})
