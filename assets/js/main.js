// IMPORT
import * as fruits from './fruits.js';
import * as modal from './modal.js';

// SECTION
const fruitsBlocks = document.querySelectorAll('.section__block');


fruitsBlocks.forEach(element => {
    element.addEventListener('click', checkWhichFruitClick)
})

function checkWhichFruitClick(e) {
    let element = e.target;
    let elementId = e.target.id;

    setAttributeAnyModal(element);

    changeModalInner(elementId);

    modal.modalOpen();
}

function setAttributeAnyModal(element) {
    let child = element.querySelector('img');
    let childImgLink = child.getAttribute('src');

    modal.modalImg.setAttribute('src', childImgLink);
}

function changeModalInner(elementId) {
    modal.modalName.innerText = fruits.objectfFuits[elementId].name;
    modal.modalInfo.innerText = fruits.objectfFuits[elementId].info;
    modal.modalEat.innerText = fruits.objectfFuits[elementId].eat;
    modal.modalStore.innerText = fruits.objectfFuits[elementId].store;
    modal.modalPrompt.innerText = fruits.objectfFuits[elementId].prompt;
}

// COPYPROMPT 
const copyPromptButton = document.querySelector('#copyPrompt');

copyPromptButton.addEventListener('click', copyPrompt);

function copyPrompt() {
    let nearParent = copyPromptButton.closest('.modal__prompt');
    let nearPrompt = nearParent.querySelector('#prompt');

    navigator.clipboard.writeText(nearPrompt.innerText);
    alert('Скопировано !')
}