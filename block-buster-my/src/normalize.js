function normalizeMovies(list) {
  const state = {
    map: new Map(),
    all: [], 
    popular: [], 
    notPopular: []
  }
  
  return list.reduce((state, movie) => {
    state.map.set(movie.id, movie)
    state.all.push(movie.id)
  
    if (movie.vote_average > 7) {
      state.popular.push(movie.id)
    } else {
      state.notPopular.push(movie.id)
    }
  
    return state
  }, state)
}



export {
  normalizeMovies
}