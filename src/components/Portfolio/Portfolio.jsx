import './Portfolio.scss'
import React from 'react';

function Portfolio () {
    return (
       
            <div className='portfolio_wrap' id='port'>
                <div className='proj_text'>
                    <p className='text'>this is my latest project. if you want to hire me</p>
                    <p className='text'>as a developer please contact me via email:</p>
                    <a href="mailto:khabazishvili20@gmail.com">khabazishvili20@gmail.com</a>
                </div>
                <div className='proj_back'>
                    <div className='proj_link'>
                        <a href="https://the-weather-2w3m.onrender.com/" className='link' rel="noopener noreferrer">my project</a>
                    </div>
                </div>
            </div>

        
    )
}

export default Portfolio;