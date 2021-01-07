import { Component, createElement } from '../lib/react/index.js';
import store from '../store.js';
import Select from './select.js';
import { SET_FILTER } from '../actions/index.js';

class Filter extends Component {

  handleChange = (event) => {
    const filter = event.target.value;
    store.dispatch({
      type: SET_FILTER,
      payload: filter,
    })
  }

  render() {
    return new Select({
      id: 'filter',
      onChange: this.handleChange,
      children: [
        createElement('option', {
          value: 'all'
        }, 'Todas'),
        createElement('option', {
          value: 'mostValued'
        }, 'Más valoradas'),
        createElement('option', {
          value: 'leastValued'
        }, 'Menos valoradas'),
      ]
    })
  }
}

export default Filter;