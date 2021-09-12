for (let item of document.getElementsByClassName('gallery-container')) {
    item.addEventListener('click',  _ => {
        item.classList.toggle('zoomed')
        document.getElementsByTagName('body')[0].classList.toggle('zoomed')
    })
}