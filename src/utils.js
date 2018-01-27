export const replaceImgs = (filter, imgs) => {
    Array.from(document.querySelectorAll(filter))
    .map(el => {
        const id = el.id.split('-')[1]
        el.src = imgs[id]
    })
}