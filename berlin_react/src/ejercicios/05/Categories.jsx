import i from './api';

export const getCategories = async () => {
  const res = await i.get(`/categories`);
  return res.data;
}

export const getJokeFromCategory = async (category) => {
  const res = await i.get(`/random?category=${category}`);
  return res.data.value;
}