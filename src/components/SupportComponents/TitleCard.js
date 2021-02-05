import titleCardImg from '../../resources/titleImage.jpg';

export default function(props){
    return (
        <div className="title-card">
            <img src={titleCardImg} onLoad={() => {props.setVisible(true)}}></img>
            <div className='title-container'>
            <h1 className='title-name'>Griffin Poole</h1>
            <h2 className='subtitle'>Full Stack Web Developer, Neuroscience BA</h2>
            </div>
        </div>
    )
}