import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
          <a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}"
          style="display: block"
          />
        </a>`;
    })
    .join('');
}

gallery.insertAdjacentHTML('beforeend', createImageGallery(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const closeImgOnEsc = e => {
  e.preventDefault();

  if (e.key === 'Escape') {
    instance.close();
  }
};
gallery.addEventListener('keydown', closeImgOnEsc);
