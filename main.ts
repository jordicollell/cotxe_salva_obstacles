let sonar = 0
cuteBot.motors(70, 70)
basic.forever(function () {
    sonar = 0.65 * cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar < 20 && sonar > 2) {
        cuteBot.motors(0, -50)
        basic.pause(randint(200, 400))
    } else {
        cuteBot.motors(70, 70)
    }
})
