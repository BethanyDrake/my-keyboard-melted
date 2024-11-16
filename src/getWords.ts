export const getWords = (s: string) => {
    return s.replaceAll(/(\.|\?|!|"|,)/g, '').toLowerCase().split(/\s+/)
 }