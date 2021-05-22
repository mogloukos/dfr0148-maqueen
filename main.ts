radio.onReceivedNumberDeprecated(function (receivedNumber) {
    item = receivedNumber
    if (item == 0) {
        maqueen.motorStop(maqueen.aMotors.M1)
        maqueen.motorStop(maqueen.aMotors.M2)
    }
    if (item == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
    }
    if (item == 2) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 255)
    }
    if (item == 3) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
    }
    if (item == 4) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
})
let item = 0
radio.setGroup(1)
