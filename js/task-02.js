/* Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arr = [];
function createItem(items) {
  items.forEach(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    console.log(itemEl.textContent);
    itemEl.classList.add('item');
    arr.push(itemEl);
  });
}

createItem(ingredients);

const listEl = document.querySelector('#ingredients');
listEl.append(...arr);
