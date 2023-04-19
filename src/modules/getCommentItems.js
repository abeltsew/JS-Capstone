import { baseUrl, involvementApi } from '../../config/keys.js';

export default async (item) => {
  const response = await fetch(
    `${baseUrl}apps/${involvementApi}/comments?item_id=${item.idMeal}`,
  );
  return response.json();
};
