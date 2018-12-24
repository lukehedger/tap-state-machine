const { Machine } = require('xstate')
const { interpret } = require('xstate/lib/interpreter')

// Stateless machine definition
const toggleMachine = Machine({
  initial: 'closed',
  states: {
    closed: { on: { LEVER: 'cold' } },
    cold: { on: { LEVER: 'closed', TAP: 'hot' } },
    hot: { on: { LEVER: 'closed', TAP: 'cold' } },
  },
})

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
  .onTransition(state => console.log(state.value))
  .start() // => closed

toggleService.send('LEVER') // => cold

toggleService.send('TAP') // => hot

toggleService.send('LEVER') // => closed
