import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from "basiclightbox";

const listGallery = document.querySelector('.gallery')

// const liItems = galleryItems.forEach(({ preview, description, original }) => {
//     const liItem = basicLightbox.create(`
//     <li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}">
//         </a>
//     </li>
// `)
// }).join('')

galleryItems.forEach(({preview, description, original}) => {
    const liItem = document.createElement("li");
    const imgItem = document.createElement("img");
    const imgOriginalLink = document.createElement('a')

    liItem.classList.add("gallery__item");
    imgItem.classList.add("gallery__image");
    imgOriginalLink.classList.add("gallery__link");

    imgOriginalLink.href = original;
    imgItem.src = preview
    imgItem.alt = description
    imgItem.dataset.source = original

    liItem.append(imgOriginalLink);
    imgOriginalLink.append(imgItem);
    listGallery.append(liItem);

});

listGallery.addEventListener('click', onImgClick)

function onImgClick(evt) {
    evt.preventDefault();

    const urlOriginal = evt.target.dataset.source

    evt.target.src = urlOriginal;

    console.log(urlOriginal);
    console.dir(evt.target);

    const instance = basicLightbox.create(evt.target);


    instance.show;
}

