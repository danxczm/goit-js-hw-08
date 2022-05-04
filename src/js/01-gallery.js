import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function makeGallery(galleryArray) {
  return galleryArray
    .map(({ preview, original, description }) => {
      return `<li>
          <a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}"
          style="display: block"
          />
        </a>
      </li>`;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('beforeend', makeGallery(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
