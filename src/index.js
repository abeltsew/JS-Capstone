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
