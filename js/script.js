import { calcIMC, displayIMCResult, isNotANumber, handleKey } from './utils.js'
import { Alert } from './alert-error.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber =
    isNotANumber(weight) || isNotANumber(height)

  if (weightOrHeightIsNotANumber) {
    Alert.open()
    inputWeight.value = ''
    inputHeight.value = ''
    return
  }

  const result = calcIMC(weight, height)
  displayIMCResult(result)
}

form.addEventListener('keypress', handleKey)

export { inputWeight, inputHeight }
