import '../CSS/BusinessCard.css'
import profilePic from '../resources/profilePicture.JPG'

import {List, Button, Icon} from 'semantic-ui-react'

import Divider from './Divider'

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
            <h2>Skills</h2>
            <Divider/>
            <List className={'skills-list'}>
                {Object.entries(skillHash).map((arr) => {
                    let [key, value] = arr;
                    return (
                        <>
                        {titleGenerator(key)}
                        <Divider/>
                        <div className="sublist">
                            {Array.isArray(value) ? (
                                <>
                                {value.map((item) => {
                                    return <div className="sublist-item">&bull; {item}</div>
                                })}
                                </>
                            ) : (
                                <>
                                {Object.entries(value).map((arr) => {
                                    let [key2, value2] = arr;
                                    return (
                                        <>
                                        <div className="sublist-item">
                                            {value2 != null ? (
                                                <>
                                                <div className="sublist-key">{key2}:</div>
                                                <div className="sublist-values">
                                                    {value2.map((item) => {
                                                        return (
                                                            <div>{item}</div>
                                                        )
                                                    })}
                                                </div>
                                                </>
                                            ) : (
                                                <>
                                                <div className="sublist-key">{key2}</div>
                                                <div className="sublist-values"></div>
                                                </>
                                            )}
                                        </div>
                                        <Divider faded={true}/>
                                        </>
                                    )
                                })}
                                </>
                            )}
                        </div>
                        </>
                    )
                })}
            </List>
        </>
    )
}

export default function(props){
    return (
        <div className='business-card-content-wrapper'>
            <div id='profile-pic' className='block'>
                <img src={profilePic}/>
            </div>
            <div id='contact-information' className='block'>
                <h2>Contact</h2>
                <Divider/>
                <List className={'contact-list'}>
                    <List.Item>
                        <span><List.Icon name='map marker alternate'/>Location: Lake Hiawatha, NJ</span>
                    </List.Item>
                    <List.Item>
                        <span><List.Icon name='mail outline'/>Email: <a href='mailto:griffinpoole5@gmail.com' target='_blank'>griffinpoole5@gmail.com</a></span>
                    </List.Item>
                    <List.Item>
                        <span><List.Icon name='globe'/>Website: <a href='http://griffinpoole.com'>griffinpoole.com</a></span>
                    </List.Item>
                </List>
                <Divider faded={true} bottomSpacing={"3em"}/>
                <h2>Résumé <span>{'&'}</span> Social Media</h2>
                <Divider/>
                <div className="links">
                    <Button title={'Resume'} onClick={()=>{window.open('https://drive.google.com/file/d/16pIlbeaiZHVhvdLk_CnQyuoohcVZwgLn/view?usp=sharing')}} style={{margin:'auto'}} icon circular size='large' color='orange'>
                        <Icon name='download'/>
                    </Button>
                    <Button title={'LinkedIn'} onClick={()=>{window.open('https://www.linkedin.com/in/griffin-poole/')}} style={{margin:'auto'}} icon circular size='large' color='linkedin'>
                        <Icon name='linkedin'/>
                    </Button>
                    <Button title={'Github'} onClick={()=>{window.open('https://github.com/griftheorange')}} style={{margin:'auto'}} icon circular size='large' color='black'>
                        <Icon name='github'/>
                    </Button>
                    <Button title={'Medium'} onClick={()=>{window.open('https://medium.com/@griffinpoole5')}} style={{margin:'auto'}} icon circular size='large' color='grey'>
                        <Icon name='medium m'/>
                    </Button>
                    <Button title={'Facebook'} onClick={()=>{window.open('https://www.facebook.com/griffin.poole.9')}} style={{margin:'auto'}} icon circular size='large' color='facebook'>
                        <Icon name='facebook'/>
                    </Button>
                    <Button title={'Instagram'} onClick={()=>{window.open('https://www.instagram.com/gryphondore/?hl=en')}} style={{margin:'auto'}} icon circular size='large' color='instagram'>
                        <Icon name='instagram'/>
                    </Button>
                </div>
            </div>
            <div id='skills' className='block'>
                {skillsGenerator({
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
                    },
                    "Soft Skills":["Strong Passion for Data Visualization", 
                                   "Flatiron School Graduate of Software Engineering", 
                                   "Rutgers BA in Cell Biology and Neuroscience",
                                   "Excellent Communication Skills",
                                   "Very Strong Organization Skills",
                                   "Highly Personable"]
                })}
                
            </div>
            <div id='about-me' className='block'>
                <h2>About Me</h2>
                <Divider/>
            </div>
        </div>
    )
}