
import Info from "../Info/Info";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Modal from '../Modal/Modal'
import './components.scss'
import { useSelector } from "react-redux";

function Components () {
    const modalState = useSelector((state) => state.modalValue.show)

    function chekModalState () {
        if(modalState) {
            return (
                <Modal/>
            )
        } else {
            return null
        }
    }

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
        <div>
            <div className="center">
                {chekModalState()}
                <div className="scroll" onClick={() => handleScroll('header')}>MENU</div>
                <Info/>
                <div className="scroll" onClick={() => handleScroll('skills')}>SKILLS</div>
                
            
                <div className="scroll me" onClick={() => handleScroll('giorgi')}>ABOUT ME </div>
                <About/>
                <div className="scroll" onClick={() => handleScroll('port')}>PORTFOLIO</div>
                

                <div className="scroll me" onClick={() => handleScroll('skills')}>SKILLS</div>
                <Portfolio/>
                <div className="scroll" onClick={() => handleScroll('header')}>MENU</div>
                
            </div>
        </div>
    )
}

export default Components;