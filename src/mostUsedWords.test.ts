import { expect, test } from 'vitest'
import { getWordOccurences, mostUsedWords } from './mostUsedWords'


test('get occurences', () => {
    expect(getWordOccurences("artichoke artichoke berry berry berry")).toEqual(
        {
            "artichoke": 2,
            "berry": 3,
          }
    )

})

test('get sort by word order', () => {
    expect(mostUsedWords("artichoke artichoke berry berry berry")).toEqual([
        {word: 'berry', occurences: 3}, {word: 'artichoke', occurences: 2}]
    )

})
