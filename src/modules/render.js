import renderComment from './renderComment.js';

const main = document.querySelector('.main');
const renderMeal = (item) => {
  const div = document.createElement('div');
  div.classList.add('list');
  div.innerHTML = `
      <div class="image">
      <img
        src="${item.strMealThumb}" alt=""
      />
    </div>
    <div class="description">
      <h5 class="description-header">
      ${item.strMeal}
     
      </h5>
      
        <button class="like" >
           <i class="far fa-heart fa-2x"></i><span>10</span>
        </button>
  
    </div>
    <button class="like" id= "${item.idMeal}">See More</button>
  `;
  main.append(div);

  const detailsBtn = document.getElementById(item.idMeal);

  detailsBtn.addEventListener('click', async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`,
    );
    const result = await response.json();

    renderComment(result.meals[0]);
  });
};

export default renderMeal;
