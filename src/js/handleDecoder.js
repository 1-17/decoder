import { encryptButton, decryptButton, inputField, outputField } from "./selectors.js"
import { buttons, output } from "./elementsStates.js"
import { decryptEntries, encryptEntries } from "./decoderEntries.js"
import hintMessage from "./hintMessage.js"

const handleDecoder = (e) => {
  const validations = {
    isFieldEmpty: inputField.value.trim() === "",
    hasInvalidChars: !inputField.value.match(/^[a-z.,!?\s]+$/),
    isOnInputEvent: e.target === inputField,
    noKeyToDecode: undefined,
    isRepeatedValue: undefined
  }

  if (validations.isFieldEmpty) {
    buttons.disable()
    output.unmount()
    hintMessage.set(`Field is empty. First, insert a text to ${e.target.id}`)
    return
  }

  if (validations.isOnInputEvent) {
    buttons.enable()
    hintMessage.reset()
    return
  }

  if (validations.hasInvalidChars) {
    output.unmount()
    hintMessage.set("Invalid text. Only lowercase letters with no accent (a-z) and . , ! ? are accepted.")
    return
  }

  const decoderEntries = e.target === encryptButton && encryptEntries || e.target === decryptButton && decryptEntries
  const decoderKeys = Object.keys(decoderEntries).join("|")
  
  validations.noKeyToDecode = !inputField.value.match(decoderKeys)
  
  if (validations.noKeyToDecode) {
    output.unmount()
    hintMessage.reset()
    hintMessage.set(`Failed to ${e.target.id}. The text does not have enough letters to be ${e.target.id}ed.`)
    return
  }

  const decodedValue = inputField.value.replace(new RegExp(decoderKeys, "g"), value => decoderEntries[value])
  validations.isRepeatedValue = outputField.value === decodedValue
  
  if (validations.isRepeatedValue) {
    hintMessage.reset()
    hintMessage.set(`Text is already successfully ${e.target.id}ed.`)
    return
  }
  
  outputField.value = decodedValue
  inputField.value = ""
  output.render()
}

export default handleDecoder
