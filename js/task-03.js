const images = [
  {
   url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Напиши скрипт для створення галереї зображень 
// на підставі масиву даних.HTML містить список ul.gallery.


//   Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
//  Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.




const list = document.querySelector('.gallery');
const image = createImages(images);

list.insertAdjacentHTML("beforeend", image);

function createImages(images) {
  return images.reduce((el, image) => (el += create(image)), ' ');
}
function create({ url, alt}) {
  const image = `<li class=img__list><img class=photo src='${(url)}' alt='${alt}' style = width:634px; ></li>`;
  return image;
}
const li =  document.querySelectorAll(".img__list")
li[0].style.backgroundColor = "green";
li[1].style.backgroundColor = "MediumTurquoise";
li[2].style.backgroundColor = "CadetBlue";

list.style =  `
  display: inline-block;
  list-style: none;
  border: 3px solid orange;
  width: 640px;
  background-color: cream;
  padding: 0px;
`
