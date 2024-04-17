import { decryptButton, encryptButton, inputField, outputField, outputPlaceholder, popupElement, popupMessage, popupTitle } from "./selectors.js"
import formatString from "./formatString.js"

const toggleElement = (elementToShow, elementToHide) => {
  elementToShow?.removeAttribute("hidden")
  elementToShow?.setAttribute("aria-hidden", false)
  elementToHide?.setAttribute("hidden", true)
  elementToHide?.setAttribute("aria-hidden", true)
}

const setPopupTypeAndMessage = (type, message) => {
  popupTitle.innerText = formatString.capitalize(type)
  popupMessage.innerText = formatString.toSentence(message)
  popupMessage.ariaLabel = popupMessage.innerText
  toggleElement(popupElement)
}

export const output = {}
output.render = () => toggleElement(outputField.parentElement, outputPlaceholder)
output.unmount = () => {
  if (outputField.value !== "") {
    outputField.value = ""
  }
  
  toggleElement(outputPlaceholder, outputField.parentElement)
}

const mainButtons = [encryptButton, decryptButton]

export const buttons = {}
buttons.disable = () => mainButtons.forEach(button => button.classList.add("disabled"))
buttons.enable = () => mainButtons.forEach(button => button.classList.remove("disabled"))

export const popup = {}
popup.success = (message) => setPopupTypeAndMessage("success", message)
popup.error = (message) => setPopupTypeAndMessage("error", message)

export const clearApp = () => {
  if (inputField.value !== "") {
    inputField.value = ""
  }
  
  buttons.disable()
  output.unmount()
}

export const unmountPopup = () => toggleElement(null, popupElement)
