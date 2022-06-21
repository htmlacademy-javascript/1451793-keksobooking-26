const OFFERS_COUNT = 10;
const LATITUDE = {
  MIN: 35.65,
  MAX: 35.7,
};
const LONGITUDE = {
  MIN: 139.7,
  MAX: 139.8,
};
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = {
  CHECKIN: ['12:00', '13:00', '14:00'],
  CHECKOUT: ['12:00', '13:00', '14:00'],
};
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

  return Number(result.toFixed(digits));
}

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

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
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

const offers = Array.from({ length: OFFERS_COUNT }, (current, index) =>
  createOffer(index, getRandomLocation()),
);

export { offers };
