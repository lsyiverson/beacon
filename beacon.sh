#!/bin/sh

rfkill unblock bluetooth
sleep 3
hciconfig hci0 up

# start beacon
node ~/beacon.js &

        