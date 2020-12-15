import { Component, createElement } from '../lib/react/index.js'
import Wrapper from './wrapper.js'
import User from './user.js'
import UserStyled from './userStyled.js'

class App extends Component {
  render() {
    return createElement('div', {
      class: 'app',
      children: [
        new Wrapper({
          children: [
            new User({
              avatar: './images/ash.jpg',
              name: 'Ash',
              age: 10
            }),
            new UserStyled({
              avatar: './images/ash.jpg',
              name: 'Ash',
              age: 10
            })
          ]
        })
      ],
    }, '')

    // return `
    //   <div class="app">
    //     ${new Wrapper({
    //       children: `
    //         ${new User({
    //           avatar: './images/ash.jpg',
    //           name: 'Ash',
    //         }).render()}

    //         ${new UserStyled({
    //           avatar: './images/ash.jpg',
    //           name: 'Ash Styled',
    //         }).render()}
    //       `
    //     }).render()}
    //   </div>
    // `
  }
}

export default App;