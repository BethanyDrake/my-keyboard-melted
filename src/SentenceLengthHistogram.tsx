import { countSentenceLengths } from "./countSentenceLengths";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
  );

export const SentenceLengthHistogram = ({ text }: {text: string}) => {
    const counts = countSentenceLengths(text);
    
    return (<Bar data={{
        labels: Object.keys(counts),
        datasets: [
            {
            data: Object.values(counts),
            backgroundColor: '#ac0cc7'
            }

        ]
    }} />)
}