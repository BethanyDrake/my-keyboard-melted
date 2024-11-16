export const splitIntoSentences = (text: string): string[] => {
        const delimiter = '$delimit$'
    const delimitedText = text.replaceAll(/((?:\.|\?|!)+)/g, (match) => `${match}${delimiter}`)
  
    return delimitedText
      .split(delimiter)
      .map((line) => line.trim())
      .filter((item) => !!item);

}