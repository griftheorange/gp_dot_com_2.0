import '../../CSS/ProjectCard.css'

import {useState} from 'react'
import {Icon, Accordion} from 'semantic-ui-react'

function cardList(projects, history){
    return (
        <>
        {projects.map((project) => {
            return (
                <div className="project-entry" onClick={() => {history.push('/project_overview/'+project.title)}}>
                    <Icon name={project.icon} size='huge'/>
                    <div className='project-details'>
                        <h3>{project.starred ? <Icon name="star" size="small"/> : null}{project.title}</h3>
                        <h4>{project.description}</h4>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default function(props){

    let [active, setActive] = useState(false)
    return (
        <div className='project-card-content-wrapper'>
            {props.accordion ? (
                <Accordion>
                    <Accordion.Title onClick={() => {setActive(!active)}} active={active}><h2><Icon name='dropdown'/>{active ? "Hide" : "Show"}</h2></Accordion.Title>
                    <Accordion.Content active={active}>
                        {cardList(props.projects, props.history)}
                    </Accordion.Content>
                </Accordion>
            ) : (
                cardList(props.projects, props.history)
            )}
        </div>
    )
}