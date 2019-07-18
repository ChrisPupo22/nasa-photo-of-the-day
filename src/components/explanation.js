import React from 'react'
import { directive } from '@babel/types';

export default function explanation(props){

    return(
        <div>
            <h2 className='descriptionHeader'>An amazing time in American History</h2>
            <p className='vid-description'>{ props.vidDesc }</p>
        </div>
    )

}