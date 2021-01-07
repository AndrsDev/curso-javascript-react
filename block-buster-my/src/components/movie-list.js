import { Component, createElement } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';
import Wrapper from './wrapper.js';
import Movie from './movie.js';

import store from '../store.js';



const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`

class MovieList extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    })
  }

  render() {
    const state = store.getState();
    const movies = state.movieList;
    const ids = state.ids[state.filter];
    
    return Wrapper({
      children: [
        new MovieListStyled({
          children: ids.map(id => new Movie(movies.get(id)))
        })
      ]
    })
  }
}

export default MovieList;