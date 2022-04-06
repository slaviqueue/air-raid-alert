import { AlertStatusChange, getAlertStatusChange } from './src/get-alert-status-change'
import { getStateRaidAlertStatus } from './src/get-state-raid-alert-status'
import { notifyAlertStarted, notifyAlertFinished } from './src/sound'
import { wait } from './src/wait'
import config from './config.json'

async function main () {
  console.log('For Sale: Baby shoes, never worn')

  let isAlertActive = false

  while (true) {
    const alertStatus = await getStateRaidAlertStatus()
    const alertStatusChange = getAlertStatusChange(isAlertActive, alertStatus)

    if (alertStatusChange === AlertStatusChange.Started) {
      notifyAlertStarted()
    } else if (alertStatusChange === AlertStatusChange.Finished) {
      notifyAlertFinished()
    }

    isAlertActive = alertStatus.enabled

    await wait(config.checkIntervalInMilliseconds)
  }
}

main()
