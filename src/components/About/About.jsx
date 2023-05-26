import './About.scss'

import {useDispatch}  from 'react-redux'
import { reactVal } from '../../slice/modalSlice';
import {reduxVal} from '../../slice/modalSlice'
import {cssVal} from '../../slice/modalSlice'
import {bootstrapVal} from '../../slice/modalSlice'
import {jsVal} from '../../slice/modalSlice'
import {gitVal} from '../../slice/modalSlice'
import {webVal} from '../../slice/modalSlice'
import {typescriptVal} from '../../slice/modalSlice'

import reac from '../../img/react.jpg'
import redx from '../../img/redux.png'
import css from '../../img/css.png'
import bootstrap from '../../img/bootstrap.png'
import js from '../../img/js.png'
import git from '../../img/git.png'
import web from '../../img/web.png'
import ts from '../../img/Typescript.png'


function About () {
    const dispatch = useDispatch();
    
    return (
        <div className='about_wrap' id='skills'>
            <div className='skillcont'>
                <h1>my skills :</h1>
            </div>
            
            <div className='skill_wrap'>
                <div className='skill_el' onClick={() => dispatch(reactVal())}>
                    <img src={reac} alt='reac' className='skill_img'/>
                   <p className='text'>react</p> 
                </div>
                <div className='skill_el' onClick={() => dispatch(reduxVal())}>
                    <img src={redx} alt="redux" className='skill_img'/>
                    <p className='text'>redux</p>
                </div>
                <div className='skill_el' onClick={() => dispatch(cssVal())}>
                    <img src={css} alt="redux" className='skill_img'/>
                    
                    <p className='text'>css , scss ,sass</p>
                </div>
                <div className='skill_el' onClick={() => dispatch(bootstrapVal())}>
                    <img src={bootstrap} alt="redux" className='skill_img'/>
                    <p className='text'>bootstrap</p>
                </div>
                <div className='skill_el' onClick={() => dispatch(jsVal())}>
                    <img src={js} alt="redux" className='skill_img'/>
                    <p className='text'>javascript ES6+</p>
                </div>
                <div className='skill_el' onClick={() => dispatch(gitVal())}>
                    <img src={git} alt="redux" className='skill_img'/>
                    <p className='text'>GIT version controll system</p>
                </div>
                <div className='skill_el' onClick={() => dispatch(webVal())}>
                    <img src={web} alt="redux" className='skill_img'/>
                    <p className='text'>webpack</p>
                </div>
                <div className='skill_el' onClick={() => dispatch(typescriptVal())}>
                    <img src={ts} alt="redux" className='skill_img'/>
                    <p className='text'>typescript</p>
                </div>
                <p className='various'>i also use various librarys in my work</p>
            </div>
        </div>
    )
}

export default About;