import Card from '../SupportComponents/Card'
import BusinessCard from '../SupportComponents/BusinessCard'
import ProjectCard from '../SupportComponents/ProjectCard'

import {useState} from 'react'

export default function(props){
    let mobileMedia = window.matchMedia('(max-width:500px)')
    let [mobileMatch, setMobileMatch] = useState(mobileMedia.matches)
    mobileMedia.addEventListener('change', (e) => {
        setMobileMatch(mobileMedia.matches)
    })

    const projects = [
        {
        "icon":"area graph",
        "title":'Budget.web',
        "description":'A React/Flask App for Personal Finance Tracking',
        "starred":true,
        },
        {
        "icon":"line graph",
        "title":'SeisMix',
        "description":'A React/Rails App for Visualizing USGS Seismic Event Data',
        "starred":true,
        },
        {
        "icon":"tag",
        "title":'GP.com',
        "description":'A React App and my Personal Webpage. Click for details on the making of',
        "starred":true,
        },
        {
        "icon":"globe",
        "title":'TopoGlobe',
        "description":'A D3.js/React App for rendering Geographic Data in a React Setting',
        "starred":false,
        },
        {
        "icon":"chart bar",
        "title":'Graph.js',
        "description":'A Javascript Webpage for Custom Plotting CSVs',
        "starred":false,
        },
        {
        "icon":"book",
        "title":'CLI DnD',
        "description":'A Command Line Interface for DnD API navigation',
        "starred":false,
        },
        {
        "icon":"game",
        "title":'Python RogueLike',
        "description":'A Procedurally Generated RogueLike game written in Python',
        "starred":false,
        },
        {
        "icon":"calendar check outline",
        "title":'JavaTodo',
        "description":'A JavaFX GUI to-do list app',
        "starred":false,
        }
    ]

    return (
        <>
        <Card label="Information">
            <BusinessCard/>
        </Card>
        <Card label="Projects">
            <ProjectCard projects={projects} accordion={mobileMatch} history={props.history}/>
        </Card>
        <Card label="References">
            <p>People like, REALLY like me... Like a lot</p>
        </Card>
        </>
    )
}