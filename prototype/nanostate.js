const nanostate = require('nanostate')

const machine = nanostate('closed', {
  closed: { lever: 'cold' },
  hot: { lever: 'closed', tap: 'cold' },
  cold: { lever: 'closed', tap: 'hot' },
})

console.log(machine.state) // => closed

machine.emit('lever')
console.log(machine.state) // => cold

machine.emit('tap')
console.log(machine.state) // => hot

machine.emit('lever')
console.log(machine.state) // => closed
