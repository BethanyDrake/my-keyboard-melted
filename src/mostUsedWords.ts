import {getWords} from './getWords'

export const getWordOccurences = (text:string): Record<string, number> => {
    const words = getWords(text)
    const dict: Record<string, number> = {}

    words.forEach((word) => {
        const previousCount = dict[word] || 0;
        dict[word] = previousCount + 1;
    })

    return dict
}

export const mostUsedWords = (text:string): {word: string, occurences: number}[] => {
    return Object.entries(getWordOccurences(text))
        .map(([word, occurences]) => ({word, occurences}))
        .sort((a, b) => b.occurences - a.occurences)
}