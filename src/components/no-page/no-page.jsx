import { Link } from 'react-router-dom';
import * as S from './no-page.styled';
import {useDispatch} from 'react-redux';
import { setGenre } from '../../store/actions';
import  Header  from '../common/header/header';

const NoPage = () => {
  const dispatchAction = useDispatch();
  const getNewGenres = () => {
      dispatchAction(setGenre('Все квесты'));
  };

  return (
    <S.Container>
      <Header/>
      <S.Title>
      The page is under development...
      </S.Title>
      <Link to="/" onClick={getNewGenres}>Вернуться на главную</Link>
    </S.Container>
  );
}
export default NoPage;
