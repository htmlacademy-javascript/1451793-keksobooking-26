import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
} from './utils.js';
import {
  OFFERS_COUNT,
  OFFER_TYPES,
  LATITUDE,
  LONGITUDE,
  FEATURES,
  TIME,
  PHOTOS,
} from './constants.js';

function getAvatarData(length) {
  const avatarUrlData = [];

  for (let i = 1; i <= length; i++) {
    avatarUrlData.push(`img/avatars/user${String(i).padStart(2, '0')}.png`);
  }

  return avatarUrlData;
}

const avatarData = getAvatarData(OFFERS_COUNT);

function getAvatar(index, avatars) {
  return avatars[index];
}

function getRandomLocation() {
  return {
    lat: getRandomPositiveFloat(LATITUDE.MIN, LATITUDE.MAX, 5),
    lng: getRandomPositiveFloat(LONGITUDE.MIN, LONGITUDE.MAX, 5),
  };
}

function getRandomFeatures(featuresData) {
  const randomFeatures = [];
  const randomFeaturesLength = getRandomPositiveInteger(1, featuresData.length);
  while (randomFeatures.length < randomFeaturesLength) {
    const randomPositiveInteger = getRandomPositiveInteger(0, featuresData.length - 1);
    if (!randomFeatures.find((feature) => feature === featuresData[randomPositiveInteger])) {
      randomFeatures.push(featuresData[randomPositiveInteger]);
    }
  }
  return randomFeatures;
}

function getRandomPhotosList(photosList) {
  const randomPhotosListLength = getRandomPositiveInteger(1, 5);

  return Array.from(
    { length: randomPhotosListLength },
    () => photosList[getRandomPositiveInteger(0, photosList.length - 1)],
  );
}

function createOffer(id, location) {
  return {
    author: {
      avatar: getAvatar(id, avatarData),
    },
    offer: {
      title: 'Апартаменты c видом на море',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(500, 50000),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomPositiveInteger(1, 10),
      guests: getRandomPositiveInteger(1, 5),
      checkin: getRandomArrayElement(TIME.CHECKIN),
      checkout: getRandomArrayElement(TIME.CHECKOUT),
      features: getRandomFeatures(FEATURES),
      description: 'Апартаменты расположены в 30 минутах ходьбы от центра города',
      photos: getRandomPhotosList(PHOTOS),
    },
    location: {
      lat: location.lat,
      lng: location.lng,
    },
  };
}

const createOffers = () =>
  Array.from({ length: OFFERS_COUNT }, (current, index) => createOffer(index, getRandomLocation()));

const offers = createOffers();

export { offers };
