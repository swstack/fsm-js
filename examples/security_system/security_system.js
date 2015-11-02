'use strict'

import fsm from '../../lib/fsm'


const STATE_OFF = 'STATE_OFF'
const STATE_CHIRP = 'STATE_CHIRP'
const STATE_ARMED = 'STATE_ARMED'


class SecuritySystem extends fsm.Context {
  constructor() {
    super()
    this.states = {
      STATE_OFF: StateOff,
      STATE_CHIRP: StateChirp,
      STATE_ARMED: StateArmed
    }
  }

  initialize() {
    this.setState(STATE_OFF)
  }

  // Events
  onDoorOpen() {
    this.state.onDoorOpen()
  }

  onWindowOpen() {
    this.state.onWindowOpen()
  }

  arm() {
    this.setState(STATE_ARMED)
  }

  armChirp() {
    this.setState(STATE_CHIRP)
  }

  disarm() {
    this.setState(STATE_OFF)
  }

}


class SecuritySystemState extends fsm.State {

  enterState() {}  // Override if needed

  exitState() {}  // Override if needed

  onDoorOpen() {
    console.log('Unhandled event: onDoorOpen')
  }

  onWindowOpen() {
    console.log('Unhandled event: onWindowOpen')
  }
}

class StateOff extends SecuritySystemState {
  onDoorOpen() {
    console.log('State is OFF - Ignore door open event')
  }

  onWindowOpen() {
    console.log('State is OFF - Ignore window open event')
  }

}

class StateChirp extends SecuritySystemState {
  onDoorOpen() {
    console.log('BEEP! Door was opened!')
  }

  onWindowOpen() {
    console.log('BEEP! Window was opened!')
  }
}

class StateArmed extends SecuritySystemState {
  onDoorOpen() {
    console.log('Door opened! Alerting the authorities!')
  }

  onWindowOpen() {
    console.log('Window opened! Alerting the authorities!')
  }
}

module.exports = SecuritySystem
