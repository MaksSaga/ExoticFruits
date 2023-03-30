// MODAL
const modalWraper = document.querySelector('.modal__wraper');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const mainConteiner = document.querySelector('.main__content');
const modalButtonClose = document.querySelectorAll('.modal__block-close');

addListenerModalButtonClose();
function addListenerModalButtonClose() {
    modalButtonClose.forEach(element => {
        element.addEventListener('click', modalClose)
    })
}

modalClose();
function modalClose() {
    modal.style.transform = 'translateY(-100px)';
    modalWraper.style.opacity = '0';
    modalWraper.style.zIndex = '-999';

    mainConteiner.style.filter = ''
    body.style.overflow = '';
}

function modalOpen() {
    modalWraper.style.zIndex = '999';
    modalWraper.style.opacity = '1';
    modal.style.transform = 'translateY(0px)';

    mainConteiner.style.filter = 'blur(1rem)'
    body.style.overflow = 'hidden';
}

// MODAL INNER
const modalName = document.querySelector('#modalName');
const modalInfo = document.querySelector('#info');
const modalEat = document.querySelector('#eat');
const modalStore = document.querySelector('#store');
const modalPrompt = document.querySelector('#prompt');
const modalImg = document.querySelector('.modal__img');

export {modalName, modalInfo, modalEat, modalStore, modalPrompt, modalWraper, modal, body, mainConteiner, modalButtonClose, modalImg, addListenerModalButtonClose, modalClose, modalOpen};