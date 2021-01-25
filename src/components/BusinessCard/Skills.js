import React, {useState} from 'react'

import Divider from '../Divider'
import {List, Accordion, Icon} from 'semantic-ui-react'

function handleClick(key, activeIndeces, setActiveIndeces){
    if(activeIndeces[key]){
        setActiveIndeces({...activeIndeces, [key]:false})
    } else {
        setActiveIndeces({...activeIndeces, [key]:true})
    }
}

function titleGenerator(stringVal, icon=false){
    if(stringVal.includes("&")){
        let arr = stringVal.split("&");
        return (
            <h2>{icon ? <Icon name="dropdown"/> : null}{arr[0]} <span>{'&'}</span> {arr[1]}</h2>
        )
    }
    else{
        return (
            <h2>{icon ? <Icon name="dropdown"/> : null}{stringVal}</h2>
        )
    }
}

function skillsGenerator(skillHash, activeIndeces, setActiveIndeces){
    return(
        <>
            <List className={'skills-list'}>
                {Object.entries(skillHash).map((arr) => {
                    let [key, value] = arr;
                    console.log(key)
                    return (
                        <div className='skills-sub-block'>
                            {titleGenerator(key)}
                            <Divider/>
                            {Object.entries(value).map((arr) => {
                                let [key1, value] = arr;
                                return (
                                    <>
                                    <h3>{key1}</h3>
                                    <Divider faded/>
                                    <Accordion>
                                        {Object.entries(value).map((arr, index) => {
                                            let [key2, value] = arr;
                                            let key = key1+key2;
                                            return (
                                                <>
                                                <Accordion.Title onClick={() => {handleClick(key, activeIndeces, setActiveIndeces)}}
                                                                    active={activeIndeces[key]}>
                                                                        <Icon name="dropdown"/>{key2}
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndeces[key]}>
                                                    {value.map((item) => {
                                                        return (
                                                            <div className='dropdown-entry'>{item}</div>
                                                        )
                                                    })}
                                                </Accordion.Content>
                                                </>
                                            )
                                        })}
                                    </Accordion>
                                    </>
                                )
                            })}
                        </div>
                    )
                })}
            </List>
        </>
    )
}

function accordionSkillsGenerator(skillHash, activeIndeces, setActiveIndeces){
    return(
        <>
            <List className={'skills-list'}>
                {Object.entries(skillHash).map((arr) => {
                    let [key, value] = arr;
                    console.log(key)
                    return (
                        <Accordion>
                            <div className='skills-sub-block'>
                                <Accordion.Title active={activeIndeces[key]} onClick={()=>{handleClick(key, activeIndeces, setActiveIndeces)}}>{titleGenerator(key, true)}</Accordion.Title>
                                <Accordion.Content active={activeIndeces[key]}>
                                    <Divider/>
                                    {Object.entries(value).map((arr) => {
                                        let [key1, value] = arr;
                                        return (
                                            <>
                                            <h3>{key1}</h3>
                                            <Divider faded/>
                                            <Accordion>
                                                {Object.entries(value).map((arr, index) => {
                                                    let [key2, value] = arr;
                                                    let key = key1+key2;
                                                    return (
                                                        <>
                                                        <Accordion.Title onClick={() => {handleClick(key, activeIndeces, setActiveIndeces)}}
                                                                            active={activeIndeces[key]}>
                                                                                <Icon name="dropdown"/>{key2}
                                                        </Accordion.Title>
                                                        <Accordion.Content active={activeIndeces[key]}>
                                                            {value.map((item) => {
                                                                return (
                                                                    <div className='dropdown-entry'>{item}</div>
                                                                )
                                                            })}
                                                        </Accordion.Content>
                                                        </>
                                                    )
                                                })}
                                            </Accordion>
                                            </>
                                        )
                                    })}
                                </Accordion.Content>
                            </div>
                        </Accordion>
                    )
                })}
            </List>
        </>
    )
}

export default function(props){
    let [activeIndeces, setActiveIndeces] = useState({});

    let contentHash = {
        "Professional Skills":{
            "Web & Software Development":{
                "Java":["Oracle Certified Java SE 8 Associate", "Spring Boot", "Spring REST", "Spring DATA/ORM/JDBC"],
                "C#":[".NET Core", "ASP.NET", "Entity Framework"],
                "Javascript":["React", "Angular", "Node.js"],
                "Python":["Flask", "Pandas"],
                "Ruby":["Rails", "Sinatra"],
                "SQL":["MySQL", "SQLite", "Postgresql"],
                "HTML":["HTML5"]
            },
            "Data Visualization & Analysis":{
                "Python":["Pandas", "Numpy"],
                "Javascript":["D3.js", "Chart.js"],
                "Ruby":["Active Record"]
            },
            "Lab Skills":{
                "Genotyping":["PCR", "RT-PCR", "Tissue Digestion for DNA Analysis"],
                "Colony Management":["Laboratory Database maintenance and upkeep","Animal Handling for small rodents"],
                "Histology":["Brain/Spinal Cord Dissection", "Tissue Sectioning", "Anitbody Staining", "Tissue Imaging and Quantitative Analysis"]
            }
        },
        "Education":{
            "Oracle":{
                "Oracle Certified Java SE 8 Associate: 1Z0-808":["Java Fundamentals", "Encapsulation", "Inheritance", "Collections, Calendar, String APIs", "Exception Handling"]
            },
            "Infosys":{
                "Infosys Spring Developer":["Spring", "Spring Boot", "Spring Data/ORM/JDBC", "Spring REST"],
                "Infosys Certified Java Developer":["Java Fundamentals", "Encapsulation", "Inheritance", "Exception Handling"],
                "Infosys Certified .NET Developer":["C#", ".NET Core", "ASP.NET"],
                "Infosys Azure Services":["Azure Cloud Services", "Azure Devops"],
                "Frontend Development":["React", "Angular", "Bootstrap"]
            },
            "Flatiron":{
                "Ruby Backend Development":["Active Record", "Sinatra", "Ruby on Rails"],
                "Frontend Development":["ES6", "React", "HTML5", "CSS"]
            },
            "Rutgers":{
                "Bachelors in Cell Biology and Neuroscience":["Intro to Computer Science", "Statistics for Research", "Applied Clinical Electrophysiology", "Advanced Neurobio", "Molecular Genetics", "Histology", "Advanced Developmental Bio", "Organic Chemistry", "Honors Physics", "Calculus", "3.685 GPA"],
                "Undergraduate Research Experience":["Tuberous Sclerosis Complex Research - D'Arcangelo Lab", "Orexin and Drug Addiction - Aston-Jones Lab"],
                "Rutgers TKD Club Treasurer":["Funds Management", "Dues Collection", "Tournament Fee Allocation", "Tournament Transport Organization"]
            }
        }
    }

    return (
        <div id='skills' className='block'>
            {props.accordion ? accordionSkillsGenerator(contentHash, activeIndeces, setActiveIndeces) : skillsGenerator(contentHash, activeIndeces, setActiveIndeces)}
        </div>
    )
}