import './style.scss';
import renderMeal from './modules/render.js';

const mainAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

window.addEventListener('DOMContentLoaded', () => {
  fetch(mainAPI)
    .then((response) => response.json())
    .then((data) => {
      const slicedData = data.meals.slice(5, 11);
      slicedData.forEach((list) => {
        renderMeal(list);
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
});
