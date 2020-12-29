const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = []
  
  const updater = () => {
    for (const listener of listeners) {
      listener();
    }
  }

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    updater()
  }

  const subscribe = (listener) => {
    listeners.push(listener); 
    
    // unsubscribe
    return () => {
      const i = listeners.indexOf(listener);
      listeners.splice(i, 1);
    };
  }
  
  return {
    getState,
    dispatch,
    subscribe
  }
}

function combineReducers() {

}

export {
  createStore,
  combineReducers
}

