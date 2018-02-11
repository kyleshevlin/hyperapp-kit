import { app, h } from 'hyperapp'
import state from './state'
import actions from './actions'
import Counter from './components/Counter'
import Greeting from './components/Greeting'

const view = () => (
  <div>
    <Greeting greeting="Hyperapp Starter Kit" />
    <Counter />
  </div>
)

app(state, actions, view, document.getElementById('app'))
