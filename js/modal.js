import { inputWeight, inputHeight } from './script.js'

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  card: document.querySelector('.modal.card'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.close'),
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  },
}

Modal.buttonClose.onclick = () => {
  Modal.close()
  inputAfterClose()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
    inputAfterClose()
  }
}

function inputAfterClose() {
  inputWeight.value = ''
  inputHeight.value = ''
}
