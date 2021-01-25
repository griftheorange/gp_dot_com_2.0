import '../../CSS/BusinessCard.css'

import React,{useState} from 'react'

import ProfilePic from './BusinessCard/ProfilePic'
import Contact from './BusinessCard/Contact'
import Skills from './BusinessCard/Skills'
import AboutMe from './BusinessCard/AboutMe'

export default function(props){

    let media = window.matchMedia('(max-width:1030px)');
    let mobileMedia = window.matchMedia('(max-width:750px)');
    let [smallScreenReader, setSmallScreenReader] = useState(media.matches);
    let [mobileScreenReader, setMobileScreenReader] = useState(mobileMedia.matches);

    media.addEventListener('change', (e) => {
      setSmallScreenReader(e.matches)
    })
    mobileMedia.addEventListener('change', (e) => {
        setMobileScreenReader(e.matches)
    })
    return (
        <div className='business-card-content-wrapper'>
            <div className="business-card-sub-section">
                <ProfilePic/>
                {smallScreenReader ? <Contact/> : <AboutMe/>}
            </div>
            <div className="business-card-sub-section">
                {smallScreenReader ? (
                    mobileScreenReader ? (
                        <AboutMe accordion/>
                    ) : <AboutMe/>
                ) : <Contact/>}
                {mobileScreenReader ? (
                    <Skills accordion/>
                ) : (
                    <Skills/>
                )}
            </div>
        </div>
    )
}