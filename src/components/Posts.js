import React from 'react'
import { directive } from '@babel/types';

export default function Posts(props){
    
    return(
        <div>
            <h1>{props.title}</h1>
            <iframe className='iframe-vid' title="nasa vid" src={props.nasaVid}></iframe>
        </div>
    )
}