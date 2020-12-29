import { render } from '../../react-dom.js'

function renderChildren(children, container) {
  if(Array.isArray(children)){
    return children.forEach(child => render(child, container))
  }

  return render(children, container)
}

function setEvents(element, event, callback){
  element.addEventListener(event, callback)
}

function setProperties(key, value, element) {
  //Support for events
  if(key.startsWith('on')){
    const event = key.replace('on','').toLowerCase()
    return setEvents(element, event, value)
  }

  //Suppor for children
  if(key === 'children'){
    return renderChildren(value, element);
  }

  //Suppor for attributes
  return element.setAttribute(key, value)
}

export function createElement(type, props, content) {
  //Creando tipo de elemento;
  const element = document.createElement(type);

  // Contenido
  if(content){
    element.textContent = content;
  }

  if(props) {
    for (const [key, value] of Object.entries(props)) {
      setProperties(key, value, element)
    }
  }

  return element
}