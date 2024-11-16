import { expect, test, it } from 'vitest'
import { getWords } from "./getWords"


test('simple sentence', () => {
    expect(getWords("a simple sentence")).toEqual([
        'a',
        'simple',
        'sentence'
    ])

})

it('ignores puncturation sentence', () => {
    expect(getWords("hello!?")).toEqual([
        'hello',
    ])

})

it('retains appostrophes', () => {
    expect(getWords("don't")).toEqual([
        'don\'t',
    ])

})


test('dialogue', () => {
    expect(getWords("\"It wouldn't be a terrible thing,\" she said, dryly.")).toEqual([
        'it',
        'wouldn\'t',
        'be',
        'a',
        'terrible',
        'thing',
        'she',
        'said', 
        'dryly'
    ])

})

