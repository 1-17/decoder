const errorMessage = (stringArg, methodName) => {
  if (!stringArg || stringArg.trim() === "") {
    throw new Error(`${formatString.capitalize(methodName)}: Missing string argument.`)
  }
}

const formatString = {}

formatString.capitalize = (string) => {
  errorMessage(string, "Capitalize")

  const firstLetterToUppercase = string.charAt(0).toUpperCase()
  const isNotCapitalized = !string.startsWith(firstLetterToUppercase)

  if (isNotCapitalized) {
    return firstLetterToUppercase + string.slice(1)
  }

  return string
}

formatString.toSentence = (string) => {
  errorMessage(string, "To Sentence")

  const notEndingWithDot = !string.endsWith(".")
  const notEndingWithExclamation = !string.endsWith("!")

  if (notEndingWithDot && notEndingWithExclamation) {
    string += "."
  }

  return formatString.capitalize(string)
}

export default formatString
