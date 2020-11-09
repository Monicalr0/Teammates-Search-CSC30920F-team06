import { createPopper } from '@popperjs/core';

const popcorn = document.querySelector('#commentUser');
const tooltip = document.querySelector('#tooltip');

createPopper(popcorn, tooltip, {
  placement: 'left-start',
});