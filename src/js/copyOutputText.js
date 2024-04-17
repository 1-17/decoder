import { outputField } from "./selectors.js"
import { popup } from "./elementsStates.js"

const copyOutputText = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(outputField.value)
      .then(() => popup.success("Text copied to clipboard!"))
      .catch((err) => {
        console.error(err)
        popup.error("Something went wrong while copying. Please, try again.")
      })
    return
  }

  if (!document.execCommand("copy")) {
    popup.error("Unfortunately, copy functionality is not available on your browser.")
    return
  }

  outputField.select()
  document.execCommand("copy")
}

export default copyOutputText
