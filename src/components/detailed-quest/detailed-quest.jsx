import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { api } from '../../index';
import { levels, types, URL_QUESTS_ID } from '../../const';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const numberCurrentCardId = useParams().id;
  const [ game, setGame ] = useState();
  const history = useHistory();

  useEffect(() => {
    api.get(`${URL_QUESTS_ID}/${numberCurrentCardId}`)
      .then((response) => setGame(response.data))
      .catch(() => toast.error('Произошла ошибка при загрузке. Повторите попытку'));
  }, [ history, numberCurrentCardId]);

  const getType = (type) => {
    let typeGame;
    types.forEach((element) => {
      if (element.key === type) {
        typeGame = element.value;
      }
    });
    return typeGame
  };

  const getLevel = (gameLevel) => {
    let levelGame;
    levels.forEach((element) => {
      if (element.key === gameLevel) {
        levelGame = element.value;
      }
    });
    return levelGame
  };


  return (
    <MainLayout>
      <S.Main>
        <ToastContainer/>
        <S.PageImage
          src={`../${game?.coverImg}`}
          alt={game?.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{game?.title}</S.PageTitle>
            <S.PageSubtitle>{getType(game?.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{game?.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{game?.peopleCount.join('-')} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getLevel(game?.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
            {game?.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        <BookingModal
        isVisible={isBookingModalOpened}
        onClose={() => setIsBookingModalOpened(false)}/>
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
