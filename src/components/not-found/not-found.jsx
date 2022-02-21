import { Link } from 'react-router-dom';
import * as S from './not-found.styled';

const NotFound = () => {
  return (
    <S.Container>
      <S.Title>
        404. Page not found
      </S.Title>
      <Link to="/">Вернуться на главную</Link>
    </S.Container>
  );
}
export default NotFound;
