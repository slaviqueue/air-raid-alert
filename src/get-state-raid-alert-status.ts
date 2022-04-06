/* eslint-disable camelcase */
import axios from 'axios'
import config from '../config.json'

type StateName = string

export type StateRaidAlertData = {
  enabled: boolean;
  type: string;
  enabled_at?: any;
  disabled_at: Date;
}

type RaidAlertData = {
  version: number
  states: Record<StateName, StateRaidAlertData>
}

export async function getStateRaidAlertStatus () {
  const result = await axios.get<RaidAlertData>(config.apiUrl).then((res) => res.data)
  const stateStatus = result.states[config.state]
  return stateStatus
}
