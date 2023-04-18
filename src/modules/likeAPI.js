import { baseUrl, involvementApi } from '../../config/keys.js';

const likesURL = `${baseUrl}apps/${involvementApi}/likes`;
const postLike = async (id) => {
  const result = fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await result.json();
  return res;
};

const fetchLikes = async () => {
  const result = await fetch(likesURL, {
    method: 'GET',
  });
  return result.json();
};

export { postLike, fetchLikes };