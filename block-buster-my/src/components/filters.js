import { Component, createElement } from '../lib/react/index.js';
import Select from './select.js';

class Filter extends Component {
  render() {
    return new Select({
      id: 'filter',
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