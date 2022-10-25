import React from 'react';
import { useState } from 'react';
import quotes from './quotes.json'

const Quotebox = () => {
    console.log(quotes )
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(randomIndex);
    const changequote = () => {
        const anotherRandom = Math.floor(Math.random() * quotes.length);
        setIndex(anotherRandom);
      };
      const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#F9F871"
      ];
      const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;
    return (
        <div>
            <p>{quotes[index].quote}</p>
            <o>{quotes[index].author}</o>


            <button onClick={changequote} >Random quote</button>
            
            
        </div>
    );
};

export default Quotebox;