import { OFFER_TYPES_RUSSIAN } from './constants.js';

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

function renderCard(data) {
  const card = cardTemplate.cloneNode(true);

  const title = card.querySelector('.popup__title');
  title.textContent = data.offer.title || 'Нет данных';

  const address = card.querySelector('.popup__text--address');
  address.textContent = data.offer.address || 'Нет данных';

  const price = card.querySelector('.popup__text--price');
  const measureUnit = price.querySelector('span');
  price.textContent = `${data.offer.price || '[нет данных]'} ${measureUnit.textContent}`;

  const type = card.querySelector('.popup__type');
  type.textContent = OFFER_TYPES_RUSSIAN[data.offer.type] || 'Тип жилища неизвестен';

  const capacity = card.querySelector('.popup__text--capacity');
  let roomsText = '';
  const guestsText = data.offer.guests < 1 ? 'гостя' : 'гостей';
  switch (data.offer.rooms % 10) {
    case 1:
      roomsText = 'комната';
      break;
    case 2:
    case 3:
    case 4:
      roomsText = 'комнаты';
      break;
    default:
      roomsText = 'комнат';
  }
  capacity.textContent = `${data.offer.rooms || '[неизвестное количество]'} ${roomsText} для ${
    data.offer.guests || '[неизвестного количества]'
  } ${guestsText}`;

  const time = card.querySelector('.popup__text--time');
  time.textContent = `Заезд после ${data.offer.checkin || '[нет данных]'}, выезд до ${
    data.offer.checkout || '[нет данных]'
  }`;

  const featuresContainer = card.querySelector('.popup__features');

  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  if (data.offer.features) {
    featuresList.forEach((feature) => {
      const isNecessary = data.offer.features.some((offerFeature) =>
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
  description.textContent = data.offer.description || 'Описание недоступно';

  const photos = card.querySelector('.popup__photos');

  const photoTemplate = photos.querySelector('.popup__photo');
  if (data.offer.photos) {
    photoTemplate.src = data.offer.photos[0];

    for (let i = 1; i < data.offer.photos.length; i++) {
      const photo = photoTemplate.cloneNode(true);
      photo.src = data.offer.photos[i];
      photos.appendChild(photo);
    }
  }

  const avatar = card.querySelector('.popup__avatar');
  avatar.src = data.author.avatar;

  mapCanvas.appendChild(card);
}

export { renderCard };
