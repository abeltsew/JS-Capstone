import './style.scss';
import './style.css';
import renderComment from './modules/renderComment';

const getComments = async (id) => {
  const response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const result = await response.json();

  renderComment(result.meals[0]);
};

getComments(52772);
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
