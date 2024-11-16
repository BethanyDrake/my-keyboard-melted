export const countWords = (s: string) => {
    return s.replaceAll(/(?:\.|\?|!)/g, '').split(/\s+/g).filter((item) => !!item).length
 }