import './Portfolio.scss'
import React from 'react';

function Portfolio () {
    return (
       
            <div className='portfolio_wrap' id='port'>
                <div className='proj_text'>
                    <p>this is my latest project. if you want to hire me</p>
                    <p>as a developer please contact me via email:</p>
                    <a href="mailto:khabazishvili20@gmail.com">khabazishvili20@gmail.com</a>
                </div>
                <div className='proj_link'>
                    project link
                </div>
            </div>

        
    )
}

export default Portfolio;