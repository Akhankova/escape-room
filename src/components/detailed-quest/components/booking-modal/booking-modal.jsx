import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import React, { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { URL_ORDERS } from '../../../../const';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ isVisible = false, onClose }) => {
  const [ formDisabled, setFormDisabled ] = useState(false);
  const [ telValid, setTelValid ] = useState(false);
  const numberCurrentFilmId = useParams().id;
  const history = useHistory();
  const [booking, setBooking] = useState({
      "name": '',
      "peopleCount": 0,
      "phone": "0000000000",
      "isLegal": true,
  });

  const handleNameChange = (event) => {
    setBooking({
      ...booking,
      "name": event.target.value,
    });
  };

  const handlePhoneChange = (event) => {
    setBooking({
      ...booking,
      "phone": event.target.value,
    });
  };

  const handleCountOfPeopleChange = (event) => {
    setBooking({
      ...booking,
      "peopleCount": Number(event.target.value),
    });
  };

  const handleCheckboxChange = () => {
    setBooking({
      ...booking,
      "isLegal": !booking.isLegal,
    });
  };

  const getValidTelNumber = (tel) => {
    if (tel.length !== 10 ) {
      setTelValid(false);
    } else {
      setTelValid(true);
    }
  };

  useEffect(() => {
    getValidTelNumber(booking.phone);
  }, [booking.phone]);

const postBooking = async (booking) =>  await fetch (URL_ORDERS, {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify(booking)
});

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setFormDisabled(true);
    postBooking(booking)
      .then(() => {
        setFormDisabled(false);
        onClose();
        history.push(`/detailed-quest/${numberCurrentFilmId}`);
      }).catch(() => {setFormDisabled(false); toast.error('Произошла ошибка при отпрвке. Повторите попытку')});
  };

const handleExitClick = () => {
  onClose();
  history.push(`/detailed-quest/${numberCurrentFilmId}`);
};

const validTel = !telValid ? <S.BlockValid >Phone length must be 10 characters long</S.BlockValid> : ' ';

  return !isVisible ? null : (
    <S.BlockLayer>
    <S.Modal>
      <ToastContainer/>
      <S.ModalCloseBtn onClick={handleExitClick}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        onSubmit={handleFormSubmit}
        id="booking-form"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            onChange={handleNameChange}
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
            disabled={formDisabled}
          />
        </S.BookingField>
        {validTel}
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            onChange={handlePhoneChange}
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
            disabled={formDisabled}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            onChange={handleCountOfPeopleChange}
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
            disabled={formDisabled}
          />
        </S.BookingField>
        <S.BookingSubmit type="submit" disabled={formDisabled || !telValid}>Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            onChange={handleCheckboxChange}
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText disabled={formDisabled}>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
  )

};

export default BookingModal;
