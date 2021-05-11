import { createStore } from 'redux'
const dot = require("dot-object");

const initialState = {
  movie: {},
  movies: [],
  resultAPI: {},
  searching: false,
  filters: {
    title: '',
    page: '1',
    type: '',
    year: '',
  }
}

function resolver(state = initialState, action) {
  switch (action.type) {
    case 'movie/info': {

      return {
        ...state,
        movie: action.payload
      }
    }
    case 'search/searching': {

      return {
        ...state,
        searching: action.payload
      }
    }
    case 'search/movies': {

      if (parseInt(dot.pick('filters.page', state)) > 1) return {
        ...state,
        movies: [
          ...state.movies,
          ...action.payload.Search
        ],
        resultAPI: action.payload
      }

      return {
        ...state,
        movies: action.payload.Search,
        resultAPI: action.payload
      }
    }
    case 'search/filters': {

      return {
        ...state,
        movies: [],
        filters: {
          ...state.filters,
          page: '1',
          title: action.payload
        }
      }
    }
    case 'search/nextPage': {
      let currentPage = state.filters.page;

      return {
        ...state,
          filters: {
          ...state.filters,
            page: currentPage
        }
      }
    }
    default: {
      return state
    }
  }
}

const store = createStore(resolver);

export default store