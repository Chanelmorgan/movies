import {useParams} from 'react-router-dom'; 
import ReactPlayer from 'react-Player'; 
import Trailer from './Trailer.css'; 

import React from 'react'
import { faHotTubPerson } from '@fortawesome/free-solid-svg-icons';

const Trailer = () => {
    let params = useParams(); 
    let key = params.ytTrailerId; 
  return (
    <div className="react-player-container">
        {(key != null)?<ReactPlayer controls={true} url={'https://www.youtube.com/watch?v=${key}'}
        width='100%' height="100%" />:null}
    </div>
  )
}

export default Trailer
