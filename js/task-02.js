const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Варіант через reduce

// document.querySelector('#ingredients').append(...ingredients.reduce((acc, el) => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = el;
//   acc.push(itemEl);
//   return acc;
// }, []))



//Варіант через map

document.querySelector('#ingredients').append(...ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = el;
  return itemEl;
}))
 
