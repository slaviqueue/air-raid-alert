# Air raid alert

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://vshymanskyy.github.io/StandWithUkraine/)

An application that runs on a raspberry to notify me about the raid alert in my city.

## How to use

1. `git clone https://github.com/slaviqueue/air-raid-alert`
2. `cd air-raid-alert`
3. `sudo apt-get install mpg123`
4. `npm install`
5. `npm install -g pm2`
6. `pm2 start start.sh`
7. `pm2 save`
8. `pm2 startup`
9. `Copy the last command line from "pm2 startup" output to the clipboard, then run it`
10. `sudo reboot`
11. Hope for the best
