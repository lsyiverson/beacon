var bleno = require('bleno'),
    uuid = 'f2c56db5dffb48d2b060d0f5a71096d8',
    major = 2,
    minor = 4,
    measuredPower = -59;

bleno.startAdvertisingIBeacon(uuid, major, minor, measuredPower);
