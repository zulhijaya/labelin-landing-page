const openMenu = () => {
    const menu = document.getElementById('menu')
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
    } else {
        menu.style.maxHeight = menu.scrollHeight + 'px';
    }
}

const openVideoModal = () => {
    const modal = document.getElementById('video-modal')
    modal.classList.toggle('hidden')
}

let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
