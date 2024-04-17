import { hintMessageElement } from "./selectors.js"
import formatString from "./formatString.js"

const initialHintMessage = formatString.toSentence("Only lowercase letters with no accent (a-z) and . , ! ? are accepted.")
hintMessageElement.innerText = initialHintMessage

const hintMessage = {}

hintMessage.set = (message) => {
  hintMessageElement.innerText = formatString.toSentence(message)
  hintMessageElement.parentElement.classList.add("error")
}

hintMessage.reset = () => {
  hintMessageElement.innerText = initialHintMessage
  hintMessageElement.parentElement.classList.remove("error")
}

export default hintMessage
