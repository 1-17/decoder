import { copyButton, decryptButton, encryptButton, inputField, logoButton, popupOkButton } from "./selectors.js"
import { clearApp, unmountPopup } from "./elementsStates.js"
import handleDecoder from "./handleDecoder.js"
import copyOutputText from "./copyOutputText.js"

window.addEventListener("DOMContentLoaded", clearApp)
inputField.addEventListener("input", handleDecoder)
logoButton.addEventListener("click", clearApp)
encryptButton.addEventListener("click", handleDecoder)
decryptButton.addEventListener("click", handleDecoder)
copyButton.addEventListener("click", copyOutputText)
popupOkButton.addEventListener("click", unmountPopup)
