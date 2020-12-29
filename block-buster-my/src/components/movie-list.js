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

  state = store.getState();

  render() {
    const { movieList: movies, ids } = this.state;
    return Wrapper({
      children: [
        new MovieListStyled({
          children: ids.all.map(id => new Movie(movies.get(id)))
        })
      ]
    })
  }
}

export default MovieList;