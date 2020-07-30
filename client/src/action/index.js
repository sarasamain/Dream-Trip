// let categoryId = 0;
/* export const addCategory = (text) => ({
  type: 'ADD_CATEGORY',
  id: categoryId++,
  text,
}); */

export const toggleCategory = (id) => ({
  type: 'TOGGLE_CATEGORY',
  id,
});
