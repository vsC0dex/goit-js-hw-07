import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallaryEl = document.querySelector('.gallery')

const render = galleryItems.map(({ preview, original, description }) => 
  `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`).join('');

gallaryEl.insertAdjacentHTML('beforeend', render);
