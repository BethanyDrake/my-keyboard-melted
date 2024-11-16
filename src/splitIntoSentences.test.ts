import { expect, test } from 'vitest'
import { splitIntoSentences } from "./splitIntoSentences"


test('simple sentences', () => {
    expect(splitIntoSentences("A standard sentence. Another.")).toEqual([
        'A standard sentence.',
        'Another.'
    ])

})


test('other punctuation', () => {
    expect(splitIntoSentences("One? Two. Three!")).toEqual([
        'One?',
        'Two.',
        'Three!'
    ])

})

test('multiple punctuation marks', () => {
    expect(splitIntoSentences("Hello!? Yeah...")).toEqual([
        'Hello!?',
        'Yeah...'
    ])
})
