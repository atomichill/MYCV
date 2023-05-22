import { createSlice } from '@reduxjs/toolkit'
import reactImg from '../img/react.jpg'
import reduxImg from '../img/redux.png'
import cssImg from '../img/css.png'
import bootstrapImg from '../img/bootstrap.png'
import javascriptImg from '../img/js.png'
import gitImg from '../img/git.png'
import webImg from '../img/web.png'
import tsImg from '../img/typescript.png'

const initialState = {
  text: '',
  image: {},
  show: false
}

export const modalValueSlice = createSlice({
  name: 'modalValue',
  initialState,
  reducers: {
    
    reactVal: (state) => {
      state.text = 'react is my main tool in development. i know how to use already setted up hooks in library, i know how to make my own custom hooks and overall i have good understanding of this javascript library.'
      state.image = reactImg
      state.show = true;
    },
    changeVal: (state) => {
      state.show = false;
    },
    reduxVal: (state) => {
      state.text = 'i am always using redux , because global state managment is the main opportunity of react itself , it makes development process way more easy and understandable for me as a dev and also it makes life easier for the whole team, i am using such features of redux like redux-toolkit and the latest updates to the state managment.'
      state.image = reduxImg
      state.show = true;
    },
    cssVal: (state) => {
      state.text = 'i have great knowledge of css , starting from flex boxes and ending with keyframe animations, probably 40% of my time learning frontend i have spend on css and frameworks for css. mainly i love to use scss , because of great features like variables and tree structuring.'
      state.image = cssImg
      state.show = true;
    },
    bootstrapVal: (state) => {
      state.text = 'i have build couple of small project using bootstrap. bootstrap is a great solution for fast and simple design and if situation will need it i can easely use it in production.'
      state.image = bootstrapImg
      state.show = true;
    },
    jsVal: (state) => {
      state.text = 'i have deep understanding of language, how it works , how it compiles code in to machine code , and in general i am constantly updating my knowledge about javascript and looking up latest changes in language.'
      state.image = javascriptImg
      state.show = true;
    },
    gitVal: (state) => {
      state.text = 'i am using GIT constantly in every my project, version controll is unraplaceble tool in development. i have medium level of GIT knowledge. i am also using services like GIT kraken and other handly tools.'
      state.image = gitImg
      state.show = true;
    },
    webVal: (state) => {
      state.text = 'webpack is must teachnology in development. as git i am using webpack in every project.'
      state.image = webImg
      state.show = true;
    },
    typescriptVal: (state) => {
      state.text = 'i have basic knowledge of typescript , how data types work in typescript and how language works in general.'
      state.image = tsImg
      state.show = true;
    },
  },
})


export const { reactVal , changeVal , reduxVal , cssVal ,bootstrapVal , jsVal , gitVal , webVal , typescriptVal} = modalValueSlice.actions

export default modalValueSlice.reducer