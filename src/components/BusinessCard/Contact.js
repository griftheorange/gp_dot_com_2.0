import Divider from '../Divider'
import {List, Button, Icon} from 'semantic-ui-react'

export default function(){
    return(
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
            <Divider faded bottomSpacing={"3em"}/>
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
    )
}