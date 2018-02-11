import Greeting from '../../src/js/components/Greeting'

describe('GreetingUI', () => {
  it('renders the passed in greeting', () => {
    const greeting = 'Hello World'
    const comp = Greeting({ greeting })

    expect(comp.nodeName).toEqual('h1')
    expect(comp.children.length).toEqual(1)
    expect(comp.children[0]).toEqual(greeting)
  })
})
