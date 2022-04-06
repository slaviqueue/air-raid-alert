import Player from 'play-sound'
import { join } from 'path'
import { promisify } from 'util'
import config from '../config.json'

const player = Player()
const promisifiedPlay = promisify(player.play).bind(player)

async function playNotification (trackName: string) {
  for (let i = 0; i < config.notificationRepeatTimes; i++) {
    await promisifiedPlay(join(__dirname, '../assets/', trackName))
  }
}

export async function notifyAlertStarted () {
  await playNotification('alert-started.mp3')
}

export async function notifyAlertFinished () {
  await playNotification('alert-finished.mp3')
}
