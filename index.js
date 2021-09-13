let zoomed = null

for (let item of document.getElementsByClassName('gallery-container')) {
    item.addEventListener('click', _ => {
        item.classList.toggle('zoomed')
        zoomed = item
        document.getElementsByTagName('body')[0].classList.toggle('zoomed')
    })
}

document.getElementsByTagName('body')[0], addEventListener('keyup', function (sender) {
    if (sender.key == 'Escape') {
        document.getElementsByTagName('body')[0].classList.remove('zoomed')
        if(zoomed != null)
            zoomed.classList.remove('zoomed')
    }
})