import { createAction } from '@reduxjs/toolkit';

export const setGames = createAction(
  'SET_GAMES',
  (games) => ({
    payload: {games},
  }),
);

export const setGamesFilter = createAction(
  'SET_GAMES_FILTER',
  (gamesFilter) => ({
    payload: {gamesFilter},
  }),
);

export const setGenre = createAction(
  'SET_GENRE',
  (genre) => ({
    payload: {genre},
  }),
);

export const setPage = createAction(
  'SET_PAGE',
  (page) => ({
    payload: {page},
  }),
);
