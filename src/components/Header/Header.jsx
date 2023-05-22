import './header.scss'
import React from 'react';

function Header () {
    const handleScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const elementRect = targetElement.getBoundingClientRect();
          const elementHeight = elementRect.height;
          const offset = window.innerHeight / 2 - elementHeight / 2;
          const elementTop = elementRect.top + window.pageYOffset;
          const middle = elementTop - offset;
          window.scrollTo({ top: middle, behavior: 'smooth' });
        }
      };
    return (
        <div className='header' id='header'>
            <p onClick={() => handleScroll('giorgi')}>ABOUT ME</p>
            <p onClick={() => handleScroll('skills')}>SKILLS</p>
            <p onClick={() => handleScroll('port')}>PROJECT</p>
        </div>
    )
}

export default Header;