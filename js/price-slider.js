import { HOUSING_PRICE } from './constants.js';
import { pristine } from './validate-form.js';

const priceSlider = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const type = document.querySelector('#type');

noUiSlider.create(priceSlider, {
  range: {
    min: HOUSING_PRICE.min[type.value],
    max: HOUSING_PRICE.max,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return Number(value).toFixed();
    },
    from: function (value) {
      return Number(value).toFixed();
    },
  },
});

priceSlider.noUiSlider.on('update', () => {
  price.value = priceSlider.noUiSlider.get();
  pristine.validate(price);
});

type.addEventListener('change', () => {
  priceSlider.noUiSlider.updateOptions({
    range: {
      min: HOUSING_PRICE.min[type.value],
      max: HOUSING_PRICE.max,
    },
    start: HOUSING_PRICE.min[type.value],
    step: 1,
    connect: 'lower',
  });
});
