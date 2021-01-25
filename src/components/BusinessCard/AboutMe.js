import {Accordion, Icon} from 'semantic-ui-react'
import {useState} from 'react'

import Divider from '../Divider'

export default function(props){

    let [dropped, setDropped] = useState(false)

    return(
        <div id='about-me' className='block'>
            {props.accordion ? (
                <Accordion>
                    <Accordion.Title active={dropped} onClick={(e) => {setDropped(!dropped)}}><h2><Icon name='dropdown'/>About Me</h2></Accordion.Title>
                    <Accordion.Content active={dropped}>
                        <p>Hello and Welcome!</p>
                        <Divider faded/>
                        <p>My name is Griffin Poole, and I am a full-stack web developer and software engineer aspiring to enter the wide world of data analysis.</p>
                        <p>I began my career as a Neuroscience Researcher at Temple University and made the switch to coding full-time in October 2019.</p>
                        <p>Since then, I have had the pleasure of working on many projects involving the traversal and analysis of large datasets, GUI development for data manipulation, graph generation, and so much more.</p>
                        <p>I've assembled overviews of some of my personal favorites below. Feel free to have a look!</p>
                    </Accordion.Content>
                </Accordion>
            ) : (
                <>
                <h2>About Me</h2>
                <Divider bottomSpacing="1.5em"/>
                <p>Hello and Welcome!</p>
                <Divider faded/>
                <p>My name is Griffin Poole, and I am a full-stack web developer and software engineer aspiring to enter the wide world of data analysis.</p>
                <p>I began my career as a Neuroscience Researcher at Temple University and made the switch to coding full-time in October 2019.</p>
                <p>Since then, I have had the pleasure of working on many projects involving the traversal and analysis of large datasets, GUI development for data manipulation, graph generation, and so much more.</p>
                <p>I've assembled overviews of some of my personal favorites below. Feel free to have a look!</p>
                </>
            )}
        </div>
    )
}