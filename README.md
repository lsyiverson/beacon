# beacon

## How to turn a edison to beacon
Assuming you have a current Intel Edison (this guide may be subject to change if new updates are released), perform the following steps:

* Plug both your Micro-USB cables into Edison (which has been snapped into a large Arduino break-out board)
* Open terminal and type: `screen /dev/cu.(TAB to autocomplete your Edison port name) 115200 -L`

Now lets turn on BLE (again, quoted from Fab-Lab.eu’s guide linked above):
```
rfkill unblock bluetooth
hciconfig hci0 up

vi /etc/opkg/base-feeds.conf (insert only following lines)
src/gz all http://repo.opkg.net/edison/repo/all
src/gz edison http://repo.opkg.net/edison/repo/edison
src/gz core2-32 http://repo.opkg.net/edison/repo/core2-32
```
Now run:
```
opkg update
opkg install bluez5-dev
```
Next, we will install Bleno and Noble, useful Node.js utilities for doing fun stuff with BLE and Javascript:
```
npm install -g async
npm install noble
npm install bleno
```
Once this is done, you should be able to turn Edison into an iBeacon.

## How to add beacon into auto start up

1. copy `beacon.sh` to `/etc/init.d/`
2. put `beacon.js` in `~/`
