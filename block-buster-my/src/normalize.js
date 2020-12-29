function normalizeMovies(list) {
  const normalized = {
    map: new Map(),
    all: [], 
    popular: [], 
    notPopular: []
  }
  
  return list.reduce((normalized, movie) => {
    normalized.map.set(movie.id, movie)
    normalized.all.push(movie.id)
  
    if (movie.vote_average > 7) {
      normalized.popular.push(movie.id)
    } else {
      normalized.notPopular.push(movie.id)
    }
  
    return normalized
  }, normalized)
}



export {
  normalizeMovies
}