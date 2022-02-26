import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import {useDispatch} from 'react-redux';
import { setGenre, setPage } from '../../../store/actions';
import { getPage } from '../../../store/cards-data/selectors';
import {useSelector} from 'react-redux';
import {NaviValue} from '../../../const';

const Header = () => {
  const dispatchAction = useDispatch();

  const page = useSelector(getPage);
  return(
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link to="/" onClick={() => {
              dispatchAction(setGenre('Все квесты'));
              dispatchAction(setPage(NaviValue.Quests));
            }} $isActiveLink={page === NaviValue.Quests ? true : false} >
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="/no" onClick={() => dispatchAction(setPage(NaviValue.New))} $isActiveLink={page === NaviValue.New ? true : false}>Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="/no" onClick={() => dispatchAction(setPage(NaviValue.Feedback))} $isActiveLink={page === NaviValue.Feedback ? true : false}>Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="/no" onClick={() => dispatchAction(setPage(NaviValue.Actions))} $isActiveLink={page === NaviValue.Actions ? true : false}>Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="/contacts" onClick={() => dispatchAction(setPage(NaviValue.Contact))} $isActiveLink={page === NaviValue.Kontact ? true : false}>Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
)};

export default Header;
