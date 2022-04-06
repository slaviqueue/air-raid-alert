import { StateRaidAlertData } from './get-state-raid-alert-status'

export enum AlertStatusChange {
  NotChanged,
  Finished,
  Started
}

export function getAlertStatusChange (wasAlertActive: boolean, currentRaidAlertStatus: StateRaidAlertData) {
  const isAlertActive = currentRaidAlertStatus.enabled

  if (isAlertActive === wasAlertActive) {
    return AlertStatusChange.NotChanged
  }

  if (!wasAlertActive && isAlertActive) {
    return AlertStatusChange.Started
  }

  if (wasAlertActive && !isAlertActive) {
    return AlertStatusChange.Finished
  }
}
