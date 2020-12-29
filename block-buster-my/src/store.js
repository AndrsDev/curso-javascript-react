import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'
import movies from './movies.js';
import {
  normalizeMovies
} from './normalize.js'


const { map, all, popular, notPopular } = normalizeMovies(movies);

const initialState = {
  movieList: map,
  filter: 'all',
  ids: {
    all,
    mostValued: popular,
    leastValued: notPopular,
  }
}

const store = createStore(reducer, initialState)
export default store
