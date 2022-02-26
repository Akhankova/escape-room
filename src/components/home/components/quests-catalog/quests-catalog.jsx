import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { setGenre } from '../../../../store/actions';
import { getFilterGames, getGenre } from '../../../../store/cards-data/selectors';
import { generatePath } from 'react-router-dom';
import { GenresEnglish, levels} from '../../../../const';

const QuestsCatalog = () => {
  const dispatchAction = useDispatch();
  const genreNew = (newGenre) => {
    dispatchAction(setGenre(newGenre));
  };

  const cards = useSelector(getFilterGames);
  const genre = useSelector(getGenre);

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
    <>
    <S.Tabs>
      <S.TabItem onClick={(evt) => genreNew(evt.target.textContent)}>
        <S.TabBtn isActive={genre === 'Все квесты' ? true : false}>
          <IconAllQuests />
          <S.TabTitle>Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem onClick={() => genreNew(GenresEnglish.ADVENTURES)}>
        <S.TabBtn>
          <IconAdventures />
          <S.TabTitle >Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem onClick={() => genreNew(GenresEnglish.HORROR)}>
        <S.TabBtn>
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem onClick={() => genreNew(GenresEnglish.MYSTIC)}>
        <S.TabBtn>
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem onClick={() => genreNew(GenresEnglish.DETECTIVE)}>
        <S.TabBtn>
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem onClick={(evt) => genreNew(evt.target.textContent)}>
        <S.TabBtn>
          <IconScifi />
          <S.TabTitle>sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>

    <S.QuestsList>
    { cards.map((card) => (
      <S.QuestItem  key={card.id}>
      <S.QuestItemLink to={generatePath("/detailed-quest/:id" , {id: card.id})}>
        <S.Quest>
          <S.QuestImage
            src={card.previewImg}
            width="344"
            height="232"
            alt={card.title}
          />

          <S.QuestContent>
            <S.QuestTitle>{card.title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {card.peopleCount.join('-')} чел
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {getLevel(card.level)}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
              ))}
    </S.QuestsList>
  </>
  )
};

export default QuestsCatalog;
