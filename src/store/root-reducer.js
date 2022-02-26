import {combineReducers} from 'redux';
import {cardsData} from '../store/cards-data/cards-data';

export const NameSpace = {
   DataCards:'DATA_FILMS',
 }

export const rootReducer = combineReducers({
  [NameSpace.DataCards]: cardsData,
});

