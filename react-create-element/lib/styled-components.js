import { createElement } from './react/index.js';


function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice();
  dynamicValues.forEach((value, index) => {
    style[index] += value(props);
  });

  return style.join('');
}

const styled = function() {
  const tags = ['h1', 'h2', 'h3', 'p', 'div', 'img'];
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