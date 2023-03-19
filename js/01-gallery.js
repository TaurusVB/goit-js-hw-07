import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGallery = document.querySelector(".gallery");

galleryItems.forEach(({ preview, description, original }) => {
  const liItem = document.createElement("li");
  const imgItem = document.createElement("img");
  const imgOriginalLink = document.createElement("a");

  liItem.classList.add("gallery__item");
  imgItem.classList.add("gallery__image");
  imgOriginalLink.classList.add("gallery__link");

  imgOriginalLink.href = original;
  imgItem.src = preview;
  imgItem.alt = description;
  imgItem.dataset.source = original;

  liItem.append(imgOriginalLink);
  imgOriginalLink.append(imgItem);
  listGallery.append(liItem);
});

listGallery.addEventListener("click", onImgClick);



function onImgClick(evt) {
  evt.preventDefault();

  const urlOriginal = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${urlOriginal}" width="800" height="600">`
  );

  window.addEventListener("keydown", onEscClick);

  // evt.target.src = urlOriginal;
  // const instance = basicLightbox.create(evt.target); !!!Чому так не працює? Я ж передаю по суті той самий вузол з посиланням на оригінальне фото.

  instance.show();

}

function onEscClick(evt) {
  if (document.body.lastChild && evt.key === "Escape") {
    document.body.lastChild.classList.remove(
      "basicLightbox",
      "basicLightbox--img",
      "basicLightbox--visible"
    );
    window.removeEventListener("keydown", onEscClick);
  }
}