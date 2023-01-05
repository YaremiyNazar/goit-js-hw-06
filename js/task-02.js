const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
 
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> 
// за одну операцію у список ul#ingredients.


const list = document.querySelector("#ingredients");
const tag = document.createElement('li');

for (let elem of ingredients) {
  let tag = document.createElement('li');
  tag.classList = "item"
	tag.textContent = elem;
	list.appendChild(tag);
}

// tag.classList = "item"
// tag.textContent = ingredients[0]
// list.appendChild(tag);
// console.log(tag)





// list.insertAdjacentHTML('beforeend', ingredients
//   .map(elem => `<li class=item > ${elem} </li> `)
//   .join('')
// );