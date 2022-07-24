import { PHOTO_FILE_TYPES } from './constants.js';

const photoChooser = document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo');

photoChooser.addEventListener('change', () => {
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = PHOTO_FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const photoElement = document.createElement('img');

    photoElement.style.width = '70px';
    photoElement.style.height = '70px';
    photoElement.src = URL.createObjectURL(file);

    photoPreview.innerHTML = '';
    photoPreview.appendChild(photoElement);
  }
});
