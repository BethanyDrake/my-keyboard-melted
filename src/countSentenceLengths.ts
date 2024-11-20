import { countWords } from "./countWords";
import { splitIntoSentences } from "./splitIntoSentences";

export const countSentenceLengths = (text: string) => {
    const sentences = splitIntoSentences(text);
    const wordCounts = sentences.map((sentence) => countWords(sentence))
    
    const sentenceCounts = {
        '1 word': 0,
        '2 words': 0, 
        '3-5 words': 0,
         '6-10 words': 0,
          '11-20 words': 0, 
          '21-40 words': 0, 
          '41-100 words': 0, 
          '101+ words': 0,
    }

    wordCounts.forEach((wordCount) => {
        if (wordCount === 1) sentenceCounts['1 word']++
        if (wordCount ===2)sentenceCounts['2 words']++
        if (wordCount >=3 && wordCount <=5) sentenceCounts['3-5 words']++
        if (wordCount >=6 && wordCount <=10) sentenceCounts['6-10 words']++
        if (wordCount >=11 && wordCount <=20) sentenceCounts['11-20 words']++
        if (wordCount >=21 && wordCount <=40) sentenceCounts['21-40 words']++
        if (wordCount >=41 && wordCount <=100) sentenceCounts['41-100 words']++
        if (wordCount >= 101 )sentenceCounts['101+ words']++
    })

    return sentenceCounts;
}