import "./style.scss";

import { renderLike, renderMeal } from "./modules/render.js";


const mainAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const itemCounter = document.querySelector('#counter');
export const itemCounters=(items,itemCounter)=>(
  itemCounter.innerHTML = `Food(${items.length})`
)
window.addEventListener('DOMContentLoaded', () => {

  fetch(mainAPI)
    .then((response) => response.json())
    .then((data) => {
      const slicedData = data.meals.slice(5, 11);

      slicedData.forEach((list) => {
        renderMeal(list);
        renderLike(list.idMeal);
      });
      itemCounters(slicedData,itemCounter);
    })
    .catch((error) => {
      throw new Error(error);
    });
});
