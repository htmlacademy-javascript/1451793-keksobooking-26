import { offers } from './data.js';
import { renderCard } from './render-card.js';
import { deactivateForms, activateForms } from './form.js';
import './validate-form.js';

const testCard = offers[0];

renderCard(testCard);

deactivateForms();

activateForms();
