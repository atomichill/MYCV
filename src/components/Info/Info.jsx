import './info.scss'
import React, { useEffect, useState } from 'react';
import me from '../../assets/2222.jpg'

function Info () {
  const [text, setText] = useState('');
  const fullText = `Hello! My name is Giorgi Khabazishvili, and this is my CV. I am a beginner junior front-end React developer. I have been actively learning and working on projects using React for about a year. I am constantly improving my programming and development skills.

  Previously, I worked as a designer for a long time. However, at some point in my life, I made the decision to make coding a significant part of my career. I am passionate about my job, and I am always eager to learn and grow.
  
  I am a highly communicative individual and often considered the heart of a company. It comes naturally to me to connect with people and build relationships. Currently, I have an intermediate level of proficiency in English (B2), Russian is my second native language, and Georgian is my first.
  
  During my free time, I enjoy making music, playing gigs, and exploring different forms of art.`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
        setText((prevText) => prevText.substring(0, prevText.length - 9));
      }
    }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        
            <div className='info_wrap' id='giorgi'>
                <img src={me} alt="mypic" className='img'/>
                <div className='text_content'>  
                    <p>{text}</p>
                </div>
            </div>

        
    )
}

export default Info;