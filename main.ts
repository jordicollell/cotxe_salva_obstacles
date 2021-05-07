let sonar = 0
cuteBot.forward()
basic.forever(function () {
    sonar = 0.65 * cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar < 20 == sonar > 2) {
        cuteBot.motors(0, -50)
        basic.pause(randint(100, 200))
    } else {
        cuteBot.forward()
    }
})
