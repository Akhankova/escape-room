import { NameSpace } from '../root-reducer';
import { createSelector } from 'reselect';

export const getGenre = (state) => state[NameSpace.DataCards].genre;
export const getGames = (state) => state[NameSpace.DataCards].games;
export const getPage = (state) => state[NameSpace.DataCards].page;

export const getFilterGames = createSelector(
  getGames,
  getGenre,
  (games, genre) =>
    genre !== 'Все квесты' ? games.filter((game) => game.type  === genre) : games,
);
