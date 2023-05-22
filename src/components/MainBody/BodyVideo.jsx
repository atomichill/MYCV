import './body.scss'
import React from 'react';
import videoBg from '../../assets/video.mp4'
import ReactPlayer from 'react-player';

function BodyVideo () {
    return (
        <div className='bg'>
            <ReactPlayer
                url={videoBg}
                playing
                loop
                muted
                cover
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default BodyVideo;