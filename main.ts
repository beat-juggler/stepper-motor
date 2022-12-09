/**
 * 2038 step
 */
input.onButtonPressed(Button.A, function () {
    motor.moveClockwise(500, stepUnit.Steps)
    motor.moveAntiClockwise(500, stepUnit.Steps)
})
let motor: stepperMotor.Motor = null
motor = stepperMotor.createMotor(
DigitalPin.P8,
DigitalPin.P9,
DigitalPin.P10,
DigitalPin.P11
)
