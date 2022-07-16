import { SERVER_URL } from './constants.js';

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error(`${res.status} — ${res.statusText}`);
}

function getSimilarOffers() {
  return fetch(`${SERVER_URL}/data`)
    .then(handleResponse)
    .catch((err) => console.log(err));
}

function sendFormData(formData) {
  return fetch(`${SERVER_URL}`, { method: 'POST', body: formData });
}

export { getSimilarOffers, sendFormData };
