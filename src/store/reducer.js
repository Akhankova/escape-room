export const initialState = {
  genre: 'All genres',
  movies: [],
  filterMovies: [],
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_GENRE':
      return {
        ...state,
        genre: action.payload.genre,
        filterMovies: state.movies.filter((film) => film.genre === action.payload.genre),

      };
    default:
      return state;
  }
};
