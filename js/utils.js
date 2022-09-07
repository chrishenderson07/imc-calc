import { Modal } from './modal.js'
import { Alert } from './alert-error.js'

function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function displayIMCResult(result) {
  const message = `O seu IMC é de ${result}`
  Modal.message.textContent = message
  Modal.open()

  printIMCMessage(result)
}

function isNotANumber(value) {
  return isNaN(value) || value == ''
}

function handleKey(event) {
  const keyPressInput = isNotANumber(event.key)
  if (keyPressInput) {
    Alert.open()
  } else {
    Alert.close()
  }
}

const subTitle = document.querySelector('.modal')
let imcMessage = document.createElement('p')
imcMessage.style.textAlign = 'center'
imcMessage.style.marginTop = '15px'
subTitle.append(imcMessage)

const printIMCMessage = (result) => {
  let weightMessage

  if (result <= 18.5) {
    weightMessage = 'Você está abaixo do peso'
  } else if (result <= 24.9) {
    weightMessage = 'Você está com um peso saudável'
  } else if (result <= 29.9) {
    weightMessage = 'Você está com sobrepeso'
  } else if (result <= 39.9) {
    weightMessage = 'Você está obeso'
  } else {
    weightMessage = 'Você esta com obesidade mórbida'
  }

  imcMessage.innerText = weightMessage
}

export { calcIMC, displayIMCResult, isNotANumber, handleKey }
