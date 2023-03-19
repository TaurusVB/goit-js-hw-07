import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector(".gallery");

const getImg = () => ({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
  };

const createGalleryList = galleryItems.map(getImg()).join("");
listGallery.insertAdjacentHTML("beforeend", createGalleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionPosition: "bottom",
  captionDelay: 250,
});
