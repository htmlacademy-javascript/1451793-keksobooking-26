const SIMILAR_OFFERS_COUNT = 10;

const LATITUDE = {
  MIN: 35.65,
  MAX: 35.7,
};
const LONGITUDE = {
  MIN: 139.7,
  MAX: 139.8,
};
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_TYPES_RUSSIAN = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

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

const Attribute = {
  DISABLED: 'disabled',
};

const Boolean = {
  TRUE: 'true',
  FALSE: 'false',
};

const CITY_CENTER_TOKYO = {
  lat: 35.6805,
  lng: 139.75356,
};

const HOUSING_PRICE = {
  min: {
    bungalow: 0,
    flat: 1000,
    hotel: 3000,
    house: 5000,
    palace: 10000,
  },
  max: 100000,
};

const SERVER_URL = 'https://26.javascript.pages.academy/keksobooking';

export {
  SIMILAR_OFFERS_COUNT,
  LATITUDE,
  LONGITUDE,
  OFFER_TYPES,
  TIME,
  FEATURES,
  PHOTOS,
  OFFER_TYPES_RUSSIAN,
  Attribute,
  Boolean,
  CITY_CENTER_TOKYO,
  HOUSING_PRICE,
  SERVER_URL,
};
