import '../CSS/BusinessCard.css'

import React,{useState} from 'react'

import ProfilePic from './BusinessCard/ProfilePic'
import Contact from './BusinessCard/Contact'
import Skills from './BusinessCard/Skills'
import AboutMe from './BusinessCard/AboutMe'

export default function(props){

    let media = window.matchMedia('(max-width:1030px)');
    let [smallScreenReader, setSmallScreenReader] = useState(media.matches);

    media.addEventListener('change', (e) => {
      setSmallScreenReader(e.matches)
    })
    return (
        <div className='business-card-content-wrapper'>
            <div className="business-card-sub-section">
                <ProfilePic/>
                {media.matches ? <Contact/> : <AboutMe/>}
            </div>
            <div className="business-card-sub-section">
                {media.matches ? <AboutMe/> : <Contact/>}
                <Skills/>
            </div>
        </div>
    )
}