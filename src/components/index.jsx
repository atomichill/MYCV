import React from 'react';


import Header from './Header/Header';
import './index.scss'
import BodyVideo from './MainBody/BodyVideo';
import Components from './Components-buid/Components';

function Index () {
    return (
        <div>
            <Header/>
            <div className='index_wrap'>
                <Components/>
                <BodyVideo/>
            </div>
        </div>
    )
}

export default Index;