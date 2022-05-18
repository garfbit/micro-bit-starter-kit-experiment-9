let T = 0
let f = 20
let item = 50
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 512)
    T = Math.idiv(1000000, f)
    pins.analogSetPeriod(AnalogPin.P0, T)
    led.plotBarGraph(
    f,
    6000
    )
    f += item
    if (f <= 20 || f >= 6000) {
        item = item * -1
    }
})
