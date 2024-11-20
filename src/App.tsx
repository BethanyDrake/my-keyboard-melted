import { useState } from 'react'
import './App.css'
import { splitIntoSentences } from './splitIntoSentences'
import { countWords } from './countWords'
import {mostUsedWords} from './mostUsedWords'
import {commonWords} from './commonWords'
import {SentenceLengthHistogram } from './SentenceLengthHistogram'

function App() {
  const [text, setText] = useState('')
  
    const [longestSentences, setLongestSentences] = useState<string[]>([])
    const [overusedWords, setOverusedWords] = useState<{ word: string; occurences: number; }[]>([])
    const [totalWords, setTotolWords] = useState<number | null>(null)
  
    const analyseSentenceLengths = () => {
      setLongestSentences(splitIntoSentences(text)
        .sort((A, B) => countWords(B) - countWords(A))
        .slice(0, 5))
    }
     
    const getMostUsedWords = () => {
      setOverusedWords(mostUsedWords(text).filter(({word}) => !commonWords.includes(word)).slice(0,20))
    }

    return (
      <div>
        <header>
        <h1>My Keyboard Melted</h1>
        <p className='tagline'>Funny analytics for first drafts. </p>
        </header>

        <div className="note">
          <h2>Data Security</h2>
  <p>All analysis is performed within the browser. This means your writing never leaves your computer. Neither your text nor the resulting analytics are transmitted, stored, or accessible to anyone other than you. 
  </p>
  </div>

  <label htmlFor='draft'>Enter your draft, the rougher the better:</label>

        <textarea placeholder="Once upon a typo-ridden time..."rows={10} id="draft" onChange={(event) => setText(event.target.value)} name="your draft here"/>
  
  <div className="row">
        <button onClick={() => setTotolWords(countWords(text))}>Word count?</button>
        <button onClick={() => analyseSentenceLengths()}>Rambling sentences?</button>
        <button onClick={() => getMostUsedWords()}>Overused words?</button>
   
        
        </div>

        {totalWords !== null && 
        <section>
        <h2>
          Total words: {Math.round(totalWords/1000)}K
        </h2>
        <ol>
    
        {overusedWords.map(({word, occurences}) => <li><b>({occurences} uses)</b> {word}</li>)}
        </ol>
        </section>
        }

        {longestSentences.length > 0 && 
        <>
        <section>
        <h2>
          Top 5 Longest Sentences:
        </h2>
        <ol>
    
        {longestSentences.map((item) => <li><b>({countWords(item)} words)</b> {item}</li>)}
        </ol>
        </section>
           <section>
           <h2>
             Sentence lengths
           </h2>
   
           <SentenceLengthHistogram text={text}/>
           
           </section>
           </>
        }

{overusedWords.length > 0 && 
        <section>
        <h2>
          Top 20 Overused Words:
        </h2>
        <ol>
    
        {overusedWords.map(({word, occurences}) => <li><b>({occurences} uses)</b> {word}</li>)}
        </ol>
        </section>
        }
  

  
      </div>
    );
  
}

export default App
