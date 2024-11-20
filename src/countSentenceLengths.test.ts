import { describe, expect, it } from 'vitest'
import { countSentenceLengths } from './countSentenceLengths';

describe('SentenceLengthHistogram', () => {
    describe('getSentenceLengthHistogramData', () => {

        it('gets sentence lengths', () => {
            const sampleText = "One. Two. Three. And a big one here."
            expect(countSentenceLengths(sampleText)).toEqual(
                {
                    '1 word': 3,
                    '2 words': 0, 
                    '3-5 words': 1,
                     '6-10 words': 0,
                      '11-20 words': 0, '21-40 words': 0, '41-100 words': 0, '101+ words': 0,
                }
            
            )

        });

    })
})