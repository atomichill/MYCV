import React from 'react'
import ReactDOM from 'react-dom/client'

import Index from './components'
import './reset.scss'
import './fonts.scss'

import { store } from './store/store'
import { Provider } from 'react-redux'


import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <Index/>
    </Provider>
  </React.StrictMode>,
)
