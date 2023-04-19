import './style.scss';
import './style.css';

import { renderLike, renderMeal } from './modules/render.js';
import { fetchLikes } from './modules/likeAPI';

const mainAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const itemCounter = document.querySelector('#counter');
window.addEventListener('DOMContentLoaded', async () => {
  const likes = fetchLikes();
  fetch(mainAPI)
    .then((response) => response.json())
    .then((data) => {
      const slicedData = data.meals.slice(0, 24);

      slicedData.forEach((list) => {
        renderMeal(list);
        renderLike(list.idMeal, likes);
      });
      itemCounter.innerHTML = `Food(${slicedData.length})`;
    })
    .catch((error) => {
      throw new Error(error);
    });
});
