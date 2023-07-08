// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createItemMarkup } from './helper';
// Change code below this line
const ulGallery = document.querySelector(".gallery");

ulGallery.insertAdjacentHTML("beforeend", createItemMarkup(galleryItems));

let gallery = new SimpleLightbox(".gallery a",
        {   captionsData: "alt",
            captionDelay: 250
        });


console.log(SimpleLightbox);
