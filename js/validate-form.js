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

const minHousingPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

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

price.placeholder = minHousingPrice[type.value];

function validateCapacity(value) {
  return roomNumberCapacity[roomNumber.value].includes(value);
}

pristine.addValidator(capacity, validateCapacity, getCapacityErrorMsg);

function validateMinHousingPrice(value) {
  return minHousingPrice[type.value] <= value;
}

function getMinPriceErrorMsg() {
  return `Минимальная цена ${minHousingPrice[type.value]}`;
}

function getCapacityErrorMsg() {
  return capacityErrorMsg[roomNumber.value];
}

pristine.addValidator(price, validateMinHousingPrice, getMinPriceErrorMsg);

capacity.addEventListener('change', () => {
  pristine.validate(capacity);
});

roomNumber.addEventListener('change', () => {
  pristine.validate(capacity);
});

type.addEventListener('change', () => {
  price.placeholder = minHousingPrice[type.value];
  pristine.validate(price);
});

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    adForm.submit();
  }
});
