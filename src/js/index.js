import { app, h } from 'hyperapp'
import Counter from './components/Counter'
import Greeting from './components/Greeting'

const state = {}

const actions = {}

const view = () => (
  <div>
    <Greeting greeting="Hyperapp Starter Kit" />
    <Counter />
  </div>
)

app(state, actions, view, document.getElementById('app'))
