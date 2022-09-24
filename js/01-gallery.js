import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallaryEl = document.querySelector(".gallery")


const render = galleryItems.map(({ preview, original, description }) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`).join('');

gallaryEl.insertAdjacentHTML("beforeend", render);


gallaryEl.addEventListener('click', onClick)

function onClick(evt) {
  evt.preventDefault()
  if (evt.target === evt.currentTarget) return;
  const currentImg = evt.target;
  const instance = basicLightbox.create(`
    <div class='modal'>
    <img src = '${currentImg.dataset.source}'/>
    </div>
    `
  );
  instance.show();
  const modalWindow = document.querySelector('.modal');
  modalWindow.addEventListener('click', onCLickCLose);
  function onCLickCLose() {
    instance.close()
  };
};