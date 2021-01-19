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

function titleGenerator(stringVal){
    if(stringVal.includes("&")){
        let arr = stringVal.split("&");
        return (
            <h2>{arr[0]} <span>{'&'}</span> {arr[1]}</h2>
        )
    }
    else{
        return (
            <h2>{stringVal}</h2>
        )
    }
}

function skillsGenerator(skillHash, activeIndeces, setActiveIndeces){
    return(
        <>
            <List className={'skills-list'}>
                {Object.entries(skillHash).map((arr) => {
                    let [key, value] = arr;
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

export default function(){
    let [activeIndeces, setActiveIndeces] = useState({});
    return (
        <div id='skills' className='block'>
            {skillsGenerator({
                "Professional Skills":{
                    "Web & Software Development":{
                        "Java":["Oracle Certified Java Associate", "Spring Boot", "Spring REST", "Spring DATA/ORM/JDBC"],
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
                        "Oracle Certified Java SE 8 Associate: 1Z0-808":[]
                    },
                    "Infosys":{
                        "Infosys Certified Java Developer":[],
                        "Infosys Certified .NET Developer":[],
                        "Infosys Azure Services Trained":[]
                    },
                    "Flatiron":{
                        "Ruby":[],
                        "Javascript":[],
                        "HTML/CSS":[]
                    },
                    "Rutgers":{
                        "Bachelors in Cell Biology and Neuroscience":[],
                        "Undergraduate Research Experience":[],
                        "Departmental Honors":[],
                        "Rutgers TKD Club Treasurer":[]
                    }
                    
                }
            }, activeIndeces, setActiveIndeces)}
        </div>
    )
}