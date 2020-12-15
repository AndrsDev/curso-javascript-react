class Component {
  constructor(props = {}, state = {}){
    this.props = props
    this.state = state
  }

  update() {}

  #updater() {
    this.componentWillUpdate();
    this.update(this.render())
    this.componentDidUpdate();
  }

  componentWillMount() {}

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUpdate() {}

  setState(value){
    this.state = {
      ...this.state,
      ...value
    }

    this.#updater();
  }
}

export {
  Component
}