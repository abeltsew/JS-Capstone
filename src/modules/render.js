import { postLike } from './likeAPI.js';
import renderComment from './renderComment.js';

const main = document.querySelector('.main');
const renderMeal = async (item) => {
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
      
     <button class="btn-like" id= "${item.idMeal}">
      <i class="far fa-heart fa-2x"></i><span id= "likes${item.idMeal}">0</span>
        </button>
  
    </div>
    <button class="like" data-id= "${item.idMeal}">See More</button>
  `;
  main.append(div);
  const likeBtn = div.querySelector('.btn-like');
  likeBtn.addEventListener('click', () => {
    const itemId = likeBtn.getAttribute('id');
    const likeCount = parseInt(likeBtn.querySelector('span').textContent, 10);
    likeBtn.querySelector('span').textContent = likeCount + 1;

    postLike(itemId);
  });

  const detailsBtn = document.querySelector(`[data-id= "${item.idMeal}"]`);

  detailsBtn.addEventListener('click', async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`,
    );
    const result = await response.json();

    renderComment(result.meals[0]);
  });
};

const renderLike = async (id, likes) => {
  likes.then((data) => {
    data.forEach((element) => {
      if (element.item_id === id) {
        document.getElementById(`likes${id}`).innerHTML = element.likes;
      }
    });
  });
};
export { renderMeal, renderLike };
