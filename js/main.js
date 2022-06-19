const OFFERS_NUMBER = 10;
const MIN_LAT = 35.65;
const MAX_LAT = 35.7;
const MIN_LNG = 139.7;
const MAX_LNG = 139.8;

const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
}

function getAvatarData(length) {
  const avatarUrlData = [];

  for (let i = length; i >= 1; i--) {
    avatarUrlData.push(`img/avatars/user${i < 10 ? '0' : ''}${i}.png`);
    // if (i < 10) {
    //   avatarUrlData.push(`img/avatars/user0${i}.png`);
    // } else {
    //   avatarUrlData.push(`img/avatars/user${i}.png`);
    // }
  }

  return avatarUrlData;
}

const avatarData = getAvatarData(OFFERS_NUMBER);

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function getRandomLocation() {
  const randomLocation = {
    lat: getRandomPositiveFloat(MIN_LAT, MAX_LAT, 5),
    lng: getRandomPositiveFloat(MIN_LNG, MAX_LNG, 5),
  };
  return randomLocation;
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
  const randomPhotosList = Array.from(
    { length: randomPhotosListLength },
    () => photosList[getRandomPositiveInteger(0, photosList.length - 1)],
  );

  return randomPhotosList;
}

function createOffer(location) {
  return {
    author: {
      avatar: avatarData.pop(),
    },
    offer: {
      title: 'Апартаменты c видом на море',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(500, 50000),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomPositiveInteger(1, 10),
      guests: getRandomPositiveInteger(1, 5),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
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

const offers = Array.from({ length: OFFERS_NUMBER }, () => createOffer(getRandomLocation()));

export { offers };
