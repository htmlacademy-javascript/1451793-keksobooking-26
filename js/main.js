const getRandomIntNumber = function (min, max) {
  if (max < min) {
    return 'Ошибка: задан отрицательный диапазон';
  }

  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);

  if (roundedMin > roundedMax) {
    return 'В указанном диапазоне нет целых чисел';
  }

  if (roundedMax === roundedMin) {
    return roundedMin;
  }

  return Math.round(Math.random() * (roundedMax - roundedMin) + roundedMin);
};

const getRandomFloatNumber = function (min, max, numberOfSigns) {
  if (max - min < 0) {
    return 'Ошибка: задан отрицательный диапазон';
  }

  if (max === min) {
    return min;
  }

  if (numberOfSigns < 0 || numberOfSigns > 100) {
    return 'Ошибка: задано количество знаков после запятой меньше 0 или больше 100';
  }

  return +(Math.random() * (max - min) + min).toFixed(numberOfSigns);
};

getRandomIntNumber(-1.1, 3.09);
getRandomFloatNumber(3.01, 4.56, 2);
