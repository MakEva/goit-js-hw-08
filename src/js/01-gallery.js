// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createItemMarkup, imgOpenModal, createModal } from './helper';
// Change code below this line
const ulGallery = document.querySelector(".gallery");

ulGallery.insertAdjacentHTML("beforeend", createItemMarkup(galleryItems));

ulGallery.addEventListener("click", imgOpenModal);

let gallery = new SimpleLightbox(".gallery a",
        {   captionsData: "alt",
            captionPosition: 'bottom',
            captionDelay: 250
        });
    gallery.on('show.simplelightbox', () => createModal());

console.log(SimpleLightbox);
