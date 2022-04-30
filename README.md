# Air raid alert

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://vshymanskyy.github.io/StandWithUkraine/)

An application that runs on a raspberry to notify me about the raid alert in my city.

## How to use

1. `git clone https://github.com/slaviqueue/air-raid-alert`
2. `cd air-raid-alert`
3. `sudo apt-get install mpg123`
4. Update `config.json`
5. `npm install`
6. `npm install -g pm2`
7. `pm2 start npm -- start`
8. `pm2 save`
9. `pm2 startup`
10. Copy the last command line from `pm2 startup` output to the clipboard, then run it
11. `sudo reboot`
12. Hope for the best
