const getRandomIntNumber = ({ min, max }) => {
  if (max < min) {
    throw new Error('задан отрицательный диапазон');
  }

  if (Math.round(min) !== min || Math.round(max) !== max) {
    throw new Error('одно из переданных чисел(или оба) нецелое');
  }

  if (max === min) {
    return min;
  }

  return Math.round(Math.random() * (max - min) + min);
};

const getRandomFloatNumber = ({ min, max }, numberOfSigns = 2) => {
  if (max - min < 0) {
    throw new Error('задан отрицательный диапазон');
  }

  if (max === min) {
    return min;
  }

  if (numberOfSigns < 0 || numberOfSigns > 100) {
    throw new Error('задано количество знаков после запятой меньше 0 или больше 100');
  }

  return +(Math.random() * (max - min) + min).toFixed(numberOfSigns);
};

getRandomIntNumber({ min: -1.1, max: 3.09 });
getRandomFloatNumber({ min: 3.01, max: 4.56 }, 2);
