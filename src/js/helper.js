export function createItemMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    }).join("")
}


export function imgOpenModal(evt) {
    evt.preventDefault();
}
    
export function createModal({ original, description } = {}) {
    return `<div>
             <img src="${original}" alt="${description}"/>
          </div>`;
}

export {
    createItemMarkup,
    imgOpenModal,
    createModal
}