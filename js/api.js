import { SERVER_URL } from './constants.js';
import { showAlert } from './utils.js';

const getSimilarOffers = (onSuccess) => {
  fetch(`${SERVER_URL}/data`)
    .then((res) => res.json())
    .then((similarOffers) => {
      onSuccess(similarOffers);
    })
    .catch(() => {
      showAlert({ message: 'Ошибка загрузки данных' });
    });
};

const sendFormData = ({ onSuccess, onFail, onFinally, body }) => {
  fetch(`${SERVER_URL}`, {
    method: 'POST',
    body,
  })
    .then((res) => {
      if (res.ok) {
        onSuccess();
      } else {
        throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    })
    .finally(() => {
      onFinally();
    });
};

export { getSimilarOffers, sendFormData };
