import { countWords } from "./countWords"
import { expect, test } from 'vitest'


test('simple sentence', () => {
    expect(countWords("A standard sentence.")).toEqual(3)

})

test('empty string', () => {
    expect(countWords("")).toEqual(0)

})

test('punctuation only', () => {
    expect(countWords("!?")).toEqual(0)

})

