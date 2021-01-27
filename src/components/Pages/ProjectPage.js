import '../../CSS/ProjectPage.css'

import ProjectDetails from '../SupportComponents/ProjectPage/ProjectDetails';
import ProjectSummary from '../SupportComponents/ProjectPage/ProjectSummary';
import ProjectSettup from '../SupportComponents/ProjectPage/ProjectSettup';
import ProjectFeatures from '../SupportComponents/ProjectPage/ProjectFeatures';
import ProjectComponents from '../SupportComponents/ProjectPage/ProjectComponents';
import Divider from '../SupportComponents/Divider';

import {useState} from 'react'

export default function(props){

    console.log(props.page.componentsBlock)

    let media = window.matchMedia('(max-width:1050px)')
    let mobileMedia = window.matchMedia('(max-width:700px)')
    let [mediaMatch, setMediaMatch] = useState(media.matches)
    let [mobileMatch, setMobileMatch] = useState(mobileMedia.matches)
    media.addEventListener('change', (e) => {
        setMediaMatch(media.matches)
    })
    mobileMedia.addEventListener('change', (e) => {
        setMobileMatch(mobileMedia.matches)
    })

    return (
        <div className="project-page-content-wrapper">
            {mobileMatch ? (
                <>
                <div className="animation-block">
                    <img src={props.page.animationBlock}/>
                </div>
                <div className="description-animation-wrapper">
                    <ProjectDetails detailsBlock={props.page.detailsBlock} accordion/>
                    <Divider bottomSpacing="1em"/>
                    <ProjectSettup settupBlock={props.page.settupBlock} accordion/>
                </div>
                <Divider topSpacing="1em" bottomSpacing="1em"/>
                <div className="summary-settup-wrapper">
                    <ProjectSummary summaryBlock={props.page.summaryBlock} accordion/>
                </div>
                <Divider topSpacing="1em" bottomSpacing="1em"/>
                <ProjectFeatures featuresBlock={props.page.featuresBlock} accordion/>
                {props.page.componentsBlock ? <ProjectComponents componentsBlock={props.page.componentsBlock}/> : null}
                </>
            ) : mediaMatch ? (
                <>
                <div className="animation-block">
                    <img src={props.page.animationBlock}/>
                </div>
                <div className="description-animation-wrapper">
                    <ProjectDetails detailsBlock={props.page.detailsBlock}/>
                    <ProjectSettup settupBlock={props.page.settupBlock}/>
                </div>
                <Divider topSpacing="1em" bottomSpacing="1em"/>
                <div className="summary-settup-wrapper">
                    <ProjectSummary summaryBlock={props.page.summaryBlock}/>
                </div>
                <Divider topSpacing="1em" bottomSpacing="1em"/>
                <ProjectFeatures featuresBlock={props.page.featuresBlock}/>
                {props.page.componentsBlock ? <ProjectComponents componentsBlock={props.page.componentsBlock}/> : null}
                </>
            ) : (
                <>
                <div className="description-animation-wrapper">
                    <ProjectDetails detailsBlock={props.page.detailsBlock}/>
                    <div className="animation-block">
                        <img src={props.page.animationBlock}/>
                    </div>
                </div>
                <Divider topSpacing="1em" bottomSpacing="1em"/>
                <div className="summary-settup-wrapper">
                    <ProjectSummary summaryBlock={props.page.summaryBlock}/>
                    <ProjectSettup settupBlock={props.page.settupBlock}/>
                </div>
                <Divider topSpacing="1em" bottomSpacing="1em"/>
                <ProjectFeatures featuresBlock={props.page.featuresBlock}/>
                {props.page.componentsBlock ? <ProjectComponents componentsBlock={props.page.componentsBlock}/> : null}
                </>
            )}
        </div>
    )
}