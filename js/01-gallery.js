import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`,
  ""
);

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const currentImage = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${currentImage}">
`,
    {
      onShow: () => {
        galleryEl.addEventListener("keydown", onEscape);
      },

      onClose: () => {
        galleryEl.removeEventListener("keydown", onEscape);
      },
    }
  );

  instance.show();

  function onEscape(evt) {
    if (evt.code === "Escape") {
      // galleryEl.removeEventListener('keydown', onEscape);
      instance.close();
      console.log(evt);
    }
  }
}
