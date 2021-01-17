import profilePic from '../../resources/profilePicture.JPG'

export default function(){
    return(
        <div id='profile-pic' className='block'>
            <img src={profilePic}/>
        </div>
    )
}