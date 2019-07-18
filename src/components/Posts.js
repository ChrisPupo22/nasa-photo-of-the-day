import React from 'react'
import { directive } from '@babel/types';
import { Image, Reveal } from 'semantic-ui-react'

export default function RevealExampleFade(props){
 
return(    
     
        <Reveal animated='fade'>
            <Reveal.Content visible>
            <Image className="fading-image" src={props.nasaVid} size='large' />
            </Reveal.Content>
            <Reveal.Content hidden>
            <Image src='' size='large' />
            </Reveal.Content>
        </Reveal>
        
    )
}
