const showModal = ({ templateSelector, templateContentSelector }) => {
  const modalTemplate = document
    .querySelector(templateSelector)
    .content.querySelector(templateContentSelector);
  const modalElement = modalTemplate.cloneNode(true);

  function onEscPress(evt) {
    if (evt.key === 'Escape') {
      document.removeEventListener('keydown', onEscPress);
      document.removeEventListener('click', onMouseClick);
      modalElement.remove();
    }
  }

  function onMouseClick() {
    document.removeEventListener('click', onMouseClick);
    document.removeEventListener('keydown', onEscPress);
    modalElement.remove();
  }

  document.addEventListener('keydown', onEscPress);
  document.addEventListener('click', onMouseClick);
  document.body.append(modalElement);
};

const showModalSuccess = () => {
  showModal({ templateSelector: '#success', templateContentSelector: '.success' });
};

const showModalError = () => {
  showModal({ templateSelector: '#error', templateContentSelector: '.error' });
};

export { showModalSuccess, showModalError };
