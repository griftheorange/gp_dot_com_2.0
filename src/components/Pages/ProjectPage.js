import '../../CSS/ProjectPage.css'

import ProjectDetails from '../SupportComponents/ProjectPage/ProjectDetails';
import ProjectSummary from '../SupportComponents/ProjectPage/ProjectSummary'
import Divider from '../SupportComponents/Divider'

export default function(props){
    console.log(props.page)
    console.log(props.page.settupBlock)
    return (
        <div className="project-page-content-wrapper">
            <div className="description-animation-wrapper">
                <ProjectDetails detailsBlock={props.page.detailsBlock}/>
                <div className="animation-block">
                    <img src={props.page.animationBlock}/>
                </div>
            </div>
            <Divider topSpacing="1em" bottomSpacing="1em" faded/>
            <div className="summary-settup-wrapper">
                <ProjectSummary summaryBlock={props.page.summaryBlock}/>
                <div className="settup">
                    <h3>Settup</h3>
                    <Divider topSpacing="1em" bottomSpacing="1em"/>
                    {/* {Object.entries()} */}
                </div>
            </div>
        </div>
    )
}