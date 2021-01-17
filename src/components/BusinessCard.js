import '../CSS/BusinessCard.css'

import ProfilePic from './BusinessCard/ProfilePic'
import Contact from './BusinessCard/Contact'
import Skills from './BusinessCard/Skills'
import AboutMe from './BusinessCard/AboutMe'

export default function(props){
    return (
        <div className='business-card-content-wrapper'>
            <div className="business-card-sub-section">
                <ProfilePic/>
                <AboutMe/>
            </div>
            <div className="business-card-sub-section">
                <Contact/>
                <Skills/>
            </div>
        </div>
    )
}