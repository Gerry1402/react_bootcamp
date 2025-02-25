import i from './api';

export const getCharaters = async () => {
  const res = await i.get(`/characters`);
  return res.data.items;
}