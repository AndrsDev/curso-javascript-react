import { Component, createElement } from '../lib/react/index.js'

class User extends Component {

  state = {
    age: this.props.age
  }

  /* Using normal functions 
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
      console.log(this.props.name)
    }
  */

  componentWillMount(){
    console.log("El componente se va a renderizar")
  }

  componentDidMount(){
    console.log("El componente se renderizó.")
  }

  componentDidUpdate(){
    console.log("El componente se actualizó.")
  }

  handleClick = (event) => {
    this.setState({
      age: this.state.age + 1
    })
  }

  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;

    return createElement('div', {
      class: "user",
      onClick: this.handleClick,
      children: [
        createElement('div', {
          class: 'avatar',
          children: createElement('img', {
            src: avatar,
          })
        }),
        createElement('h2', null, `${name} ${age}`),
      ]
    })
  }
}

export default User