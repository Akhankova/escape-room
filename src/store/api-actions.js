import {setGames} from '../store/actions';

export const loadGames = () =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get('/quests');
      dispatch(setGames(data));
    } catch {
      console.log('error');
    }
  };
