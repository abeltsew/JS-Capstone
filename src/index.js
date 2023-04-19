import './style.scss';
import './style.css';

import renderMeal from './modules/render.js';
import renderLike from './modules/likeRender.js';
import { fetchLikes } from './modules/likeAPI.js';

const mainAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const itemCounter = document.querySelector('#counter');
window.addEventListener('DOMContentLoaded', async () => {
  const likes = fetchLikes();
  const itemCounters = (items) => {
    itemCounter.innerHTML = `Food(${items.length})`;
  };
  fetch(mainAPI)
    .then((response) => response.json())
    .then((data) => {
      const slicedData = data.meals.slice(0, 24);

      slicedData.forEach((list) => {
        renderMeal(list);
        renderLike(list.idMeal, likes);
      });
      itemCounters(slicedData);
    })
    .catch((error) => {
      throw new Error(error);
    });
});
