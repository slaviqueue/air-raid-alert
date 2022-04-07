# Air raid alert

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://vshymanskyy.github.io/StandWithUkraine/)

An application that runs on a raspberry to notify me about the raid alert in my city.

## How to use

1. `git clone https://github.com/slaviqueue/air-raid-alert/`
2. `cd air-raid-alert`
3. `npm install`
4. `sudo apt-get install mpg123`
5. Open crontab for editing `crontab -e`
6. Add `@reboot <your-path>/air-raid-alert/start.sh >> ~/logs.txt 2>&1` to run
   process in background after boot
7. Hope for the best
