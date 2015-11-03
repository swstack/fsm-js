'use strict'

let assert = require('assert')
let fsm = require('../lib/fsm')


class TestFSM extends fsm.Context {
  constructor() {
    super()
    this.states = {
      'a': TestStateA,
      'b': TestStateB
    }
  }
}

class TestStateA extends fsm.State {

}

class TestStateB extends fsm.State {

}


describe('FSM', ()=> {

	it('should transition states correctly', ()=> {
    let t = new TestFSM()
    assert.equal(t.state, null)
    t.setState('a')
    assert.equal(t.state.key, 'a')
	})

})
