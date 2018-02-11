import { h } from 'hyperapp'
import nestable from 'hyperapp-nestable'

const state = {
  count: 0
}

const actions = {
  decrement: () => state => ({ count: state.count - 1 }),
  increment: () => state => ({ count: state.count + 1 })
}

const view = (state, actions) => (
  <div>
    <h2>{state.count}</h2>
    <button onclick={actions.increment}>+</button>
    <button onclick={actions.decrement}>-</button>
  </div>
)

export default nestable(state, actions, view, 'counter')
