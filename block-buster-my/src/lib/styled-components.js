import { createElement } from './react/index.js';

const tags = ['h1', 'h2', 'h3', 'p', 'div', 'img', 'header', 'footer', 'section', 'form', 'input', 'button', 'select'];

function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice();
  dynamicValues.forEach((value, index) => {
    style[index] += value(props);
  });

  return style.join('');
}

const styled = function() {
  let object = {}
  tags.forEach(tag => {
    object[tag] = function(strings, ...dynamicValues) {
      return function(props, content){
        const style = buildStyles(strings, dynamicValues, props)
        return createElement(tag, {
          ...props,
          style,
        }, content)
      }
    }
  })

  return object;
}()

export default styled;