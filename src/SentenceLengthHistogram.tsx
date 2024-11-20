import { countSentenceLengths } from "./countSentenceLengths";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    
  );


// https://www.gutenberg.org/files/158/158-h/158-h.htm
const janeAusten = {
  "1 word": 6.649403495792103,
  "2 words": 4.781281790437437,
  "3-5 words": 14.010912790159994,
  "6-10 words": 23.95264958845834,
  "11-20 words": 26.486636456117633,
  "21-40 words": 17.710163691852397,
  "41-100 words": 6.288726532877092,
  "101+ words": 0.12022565430500323
}

// https://www.brandonsanderson.com/blogs/blog/warbreaker-rights-and-downloads
const brandenSanderon = {
  "1 word": 2.8032365686236913,
  "2 words": 4.4253556774168805,
  "3-5 words": 23.330904628599917,
  "6-10 words": 30.578670859377993,
  "11-20 words": 27.84446063580933,
  "21-40 words": 6.024466004525061,
  "41-100 words": 0.034513172527514666,
  "101+ words": 0
}

//https://archive.org/stream/StephenieMeyer1.Twilight/Stephenie%20Meyer%201.%20Twilight_djvu.txt
const meyer = {
  "1 word": 3.361913357400722,
  "2 words": 3.8808664259927803,
  "3-5 words": 22.119434416365824,
  "6-10 words": 29.617930204572808,
  "11-20 words": 27.384175691937422,
  "21-40 words": 7.287906137184115,
  "41-100 words": 0.2557160048134778,
  "101+ words": 0.007521058965102287
}

export const SentenceLengthHistogram = ({ text }: {text: string}) => {
    const counts = countSentenceLengths(text);
    console.log(counts)
    
    return (<Bar data={{
        labels: Object.keys(counts),
        datasets: [
            {
            label: "You",
            data: Object.values(counts),
            backgroundColor: '#ac0cc7'
            },
            {
              label: "Jane Austen",
              data: Object.values(janeAusten),
              backgroundColor: '#f3ddf7'
              },
              {
                label: "Brandon Sanderson",
                data: Object.values(brandenSanderon),
                backgroundColor: '#d6f4d0'
                },
                {
                  label: "Stephenie Meyer",
                  data: Object.values(meyer),
                  backgroundColor: '#d6f4f0'
                  }

        ]
    }} />)
}