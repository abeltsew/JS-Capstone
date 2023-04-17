import { baseUrl, involvementApi } from '../../config/keys.js';
import getItemComments from './getCommentItems.js';

export const updateCommentCount = (comment, commentsHeader) => {
  if (comment) {
    commentsHeader.innerHTML = `comments (${comment.length})`;
  } else {
    commentsHeader.innerHTML = `comments (${
      (comment.length ? comment.length : 0) + 1
    })`;
  }
};

export default (item) => {
  const body = document.querySelector('.container');
  const modalBG = document.createElement('div');
  modalBG.classList.add('modal');
  const commentUI = document.createElement('div');
  commentUI.classList.add('comment-container');
  commentUI.innerHTML = `
        <img src="${item.strMealThumb}" />
        
        <h2>${item.strMeal}</h2>
      
      `;

  const details = document.createElement('div');
  const closeButton = document.createElement('h2');
  closeButton.innerHTML = 'X';
  closeButton.classList.add('close');
  closeButton.addEventListener('click', () => modalBG.classList.toggle('open'));
  details.classList.add('ingredient');
  for (let i = 1; i < 5; i += 1) {
    const p = document.createElement('p');
    p.innerHTML = `${item[`strIngredient${i}`]} : ${item[`strMeasure${i}`]}`;
    details.appendChild(p);
  }

  commentUI.appendChild(details);

  const commments = document.createElement('div');
  const commentsHeader = document.createElement('h2');

  commments.appendChild(commentsHeader);

  commentUI.appendChild(commments);

  getItemComments(item).then((comment) => {
    updateCommentCount(comment, commentsHeader);

    comment?.forEach((comment) => {
      const p = document.createElement('p');
      const { creation_date: date, username, comment: commentText } = comment;
      // eslint-disable-next-line
      p.innerHTML = date + username + ':' + commentText;
      commments.appendChild(p);
    });
  });

  const commentForm = document.createElement('form');
  commentForm.classList.add('comment-form');

  const h2 = document.createElement('h2');
  h2.innerHTML = 'Add A Comment ';

  const name = document.createElement('input');
  name.type = 'text';
  name.name = 'name';
  name.placeholder = 'Your Name';

  const comment = document.createElement('textarea');
  comment.name = 'comment';
  comment.placeholder = 'Your Insights';

  commentForm.appendChild(h2);
  commentForm.appendChild(name);
  commentForm.appendChild(comment);

  const addButton = document.createElement('button');
  addButton.innerHTML = 'Comment';

  addButton.addEventListener('click', async (e) => {
    e.preventDefault();

    await fetch(`${baseUrl}apps/${involvementApi}/comments/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: item.idMeal,
        username: name.value,
        comment: comment.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const p = document.createElement('p');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    p.innerHTML = `${formattedDate} ${name.value}:${comment.value}`;
    commments.appendChild(p);
    updateCommentCount(false, commentsHeader);
    name.value = '';
    comment.value = '';
  });

  commentForm.appendChild(addButton);

  commentUI.appendChild(commentForm);
  modalBG.appendChild(commentUI);
  modalBG.appendChild(closeButton);

  body.appendChild(modalBG);
};
