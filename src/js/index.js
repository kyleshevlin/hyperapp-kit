import { app, h } from 'hyperapp'
import Greeting from './components/Greeting'

const state = {}

const actions = {}

const view = () => <Greeting greeting="Hyperapp Starter Kit" />

app(state, actions, view, document.getElementById('app'))
