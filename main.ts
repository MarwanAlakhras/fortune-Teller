input.onButtonPressed(Button.A, function () {
    if (randint(0, 6) == 1) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("NO!")
    } else if (randint(0, 6) == 2) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        basic.showString("Probably Not",100)
    } else if (randint(0, 6) == 3) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        basic.showString("Only Time Will Tell",100)
    } else if (randint(0, 6) == 4) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showString("You Must Never Know",100)
    } else if (randint(0, 6) == 5) {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
        basic.showString("Likely")
    } else if (randint(0, 6) == 6) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        basic.showString("YES!")
    }
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.clearScreen()
    music.stopAllSounds()
})
basic.showString("Fortune Teller",80)
