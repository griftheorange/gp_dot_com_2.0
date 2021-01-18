import Divider from '../Divider'
import {List} from 'semantic-ui-react'

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

function skillsGenerator(skillHash){
    return(
        <>
            <List className={'skills-list'}>
                {Object.entries(skillHash).map((arr) => {
                    let [key, value] = arr;
                    return (
                        <div className='skills-sub-block'>
                            {titleGenerator(key)}
                            <Divider/>
                            {Array.isArray(value) ? (
                                <List style={{paddingLeft:"0"}}>
                                    {value.map((item) => {
                                        return(
                                            <List.Item style={{marginBottom:"0.6em"}}>{item}</List.Item>
                                        )
                                    })}
                                </List>
                            ) : (
                                <p>Object</p>
                            )}
                        </div>
                    )
                })}
            </List>
        </>
    )
}

export default function(){
    return (
        <div id='skills' className='block'>
            {skillsGenerator({
                "Professional":{
                    "Web & Software Developemnt":{
                        "Java":["Oracle Certified Java Associate", "Spring Boot", "Spring REST", "Spring DATA/ORM/JDBC"],
                        "C#":[".NET Core", "ASP.NET", "Entity Framework"],
                        "Javascript":["React", "Angular", "Node.js"],
                        "Ruby":["Rails", "Sinatra"],
                        "Python":["Flask", "Pandas"],
                        "SQL":["MySQL", "SQLite", "Postgresql"],
                        "HTML":["HTML5"]
                    },
                    "Data Visualization & Analysis":{
                        "Python":["Pandas", "Numpy"],
                        "Javascript":["D3.js", "Chart.js"],
                        "Ruby":["Active Record"]
                    }
                },
                "Soft Skills":["Strong Passion for Data Visualization", 
                                "Flatiron School Graduate of Software Engineering", 
                                "Rutgers BA in Cell Biology and Neuroscience",
                                "Excellent Communication Skills",
                                "Very Strong Organization Skills",
                                "Highly Personable"]
            })}
        </div>
    )
}