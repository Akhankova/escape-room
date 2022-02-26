import { setGenre, setGamesFilter, setGames, setPage } from '../actions';
import { createReducer } from '@reduxjs/toolkit';

export const initialState = {
  genre: 'Все квесты',
  games: [],
  filterGames: [],
  page: 'КВЕСТЫ',
};

export const cardsData = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setGames, (state, action) => {
      state.games = action.payload.games.length ? action.payload.games : state.games;
    })
    .addCase(setGamesFilter, (state, action) => {
      state.filterGames = state.games.filter((card) => action.payload.genre === 'Все квесты' ? card : card.type === action.payload.genre);
    })
    .addCase(setPage, (state, action) => {
      state.page = action.payload.page;
    });
});
