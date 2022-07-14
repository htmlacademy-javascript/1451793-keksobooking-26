import { Room } from './Room.js';
import { Guest } from './Guest.js';
import { OFFER_TYPES_RUSSIAN } from './constants.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

function createCard({ offer, author }) {
  const card = cardTemplate.cloneNode(true);

  const title = card.querySelector('.popup__title');
  title.textContent = offer.title || 'Нет данных';

  const address = card.querySelector('.popup__text--address');
  address.textContent = offer.address || 'Нет данных';

  const price = card.querySelector('.popup__text--price');
  const measureUnit = price.querySelector('span');
  price.textContent = offer.price
    ? `${offer.price} ${measureUnit.textContent}`
    : '[стоимость неизвестна]';

  const type = card.querySelector('.popup__type');
  type.textContent = OFFER_TYPES_RUSSIAN[offer.type] || 'Тип жилища неизвестен';

  const capacity = card.querySelector('.popup__text--capacity');
  const roomsText = Room.format(offer.rooms);
  const guestsText = Guest.format(offer.guests);

  capacity.textContent = `${offer.rooms || '[неизвестное количество]'} ${roomsText} для ${
    offer.guests || '[неизвестного количества]'
  } ${guestsText}`;

  const time = card.querySelector('.popup__text--time');
  time.textContent = `Заезд после ${offer.checkin || '[нет данных]'}, выезд до ${
    offer.checkout || '[нет данных]'
  }`;

  const featuresContainer = card.querySelector('.popup__features');

  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  if (offer.features) {
    featuresList.forEach((feature) => {
      const isNecessary = offer.features.some((offerFeature) =>
        feature.classList.contains(`popup__feature--${offerFeature}`),
      );
      if (!isNecessary) {
        feature.remove();
      }
    });
  } else {
    featuresContainer.remove();
  }

  const description = card.querySelector('.popup__description');
  description.textContent = offer.description || 'Описание недоступно';

  const photos = card.querySelector('.popup__photos');

  const photoTemplate = photos.querySelector('.popup__photo');
  if (offer.photos) {
    photoTemplate.src = offer.photos[0];

    for (let i = 1; i < offer.photos.length; i++) {
      const photo = photoTemplate.cloneNode(true);
      photo.src = offer.photos[i];
      photos.appendChild(photo);
    }
  }
  const avatar = card.querySelector('.popup__avatar');
  avatar.src = author.avatar;

  return card;
}

export { createCard };
