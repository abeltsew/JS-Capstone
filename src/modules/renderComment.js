import { baseUrl, involvementApi } from '../../config/keys';

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
  closeButton.addEventListener('click', () => body.classList.toggle('open'));
  details.classList.add('ingredient');
  for (let i = 1; i < 5; i++) {
    const p = document.createElement('p');
    p.innerHTML = `${item['strIngredient' + i]} : ${item['strMeasure' + i]}`;
    details.appendChild(p);
  }

  commentUI.appendChild(details);

  const commments = document.createElement('div');
  const commentsHeader = document.createElement('h2');
  commentsHeader.innerHTML = 'comments';
  commments.appendChild(commentsHeader);

  commentUI.appendChild(commments);

  const getItemComments = async () => {
    const response = await fetch(
      `${baseUrl}apps/${involvementApi}/comments?item_id=${item.idMeal}
        `
    );
    return await response.json();
  };

  getItemComments().then((comment) => {
    comment.forEach((comment) => {
      const p = document.createElement('p');
      p.innerHTML = `${comment.creation_date} ${comment.username}:${comment.comment}`;
      commments.appendChild(p);
    });
  });

  const commentForm = document.createElement('form');
  commentForm.classList.add('comment-form');

  const h2 = document.createElement('h2');
  h2.innerHTML = `Add A Comment `;

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

  addButton?.addEventListener('click', async (e) => {
    e.preventDefault();

    const response = await fetch(`${baseUrl}apps/${involvementApi}/comments/`, {
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
    // clear the form filed
  });

  commentForm.appendChild(addButton);

  commentUI.appendChild(commentForm);
  modalBG.appendChild(commentUI);
  modalBG.appendChild(closeButton);

  body.appendChild(modalBG);
};
