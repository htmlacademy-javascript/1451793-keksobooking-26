import { HOUSING_PRICE } from './constants.js';

const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'error__text',
});

const price = adForm.querySelector('#price');
const type = adForm.querySelector('#type');
const capacity = adForm.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');
const timein = adForm.querySelector('#timein');
const timeout = adForm.querySelector('#timeout');

const roomNumberCapacity = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const capacityErrorMsg = {
  1: 'для 1 гостя максимум',
  2: 'для 2 гостей максимум',
  3: 'для 3 гостей максимум',
  100: 'не для гостей',
};

price.placeholder = HOUSING_PRICE.min[type.value];

const validateCapacity = (value) => roomNumberCapacity[roomNumber.value].includes(value);
const getCapacityErrorMsg = () => capacityErrorMsg[roomNumber.value];

pristine.addValidator(capacity, validateCapacity, getCapacityErrorMsg);

const validateMinHousingPrice = (value) => HOUSING_PRICE.min[type.value] <= value;
const getMinPriceErrorMsg = () => `Минимальная цена ${HOUSING_PRICE.min[type.value]}`;

pristine.addValidator(price, validateMinHousingPrice, getMinPriceErrorMsg);

capacity.addEventListener('change', () => {
  pristine.validate(capacity);
});

roomNumber.addEventListener('change', () => {
  pristine.validate(capacity);
});

type.addEventListener('change', () => {
  price.placeholder = HOUSING_PRICE.min[type.value];
  pristine.validate(price);
});

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

export { pristine };
