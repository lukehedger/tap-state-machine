# Single-lever mixed tap state machine

✏️ [State machine sketch](https://sketch.systems/lukehedger/sketch/878d872d250d755276815d2fb210b745)

#### [`nanostate`](https://github.com/choojs/nanostate)
> Small finite state machines

Super simple finite state machine library. You define a machine with an initial
string value state and a set of states with corresponding transitions.
Transitions can then be emitted to change the state of the machine, which can be
retrieved at any time.

#### [`xstate`](https://github.com/davidkpiano/xstate)
> State machines and statecharts for the modern web

Full-featured finite state machine library. Machines are defined once and
instantiated one or more times, via ['interpreters'](https://xstate.js.org/docs/guides/interpretation.html).
Instances of machines are called Services. Transitions are 'sent' to the Service
to change the state of the Machine.
