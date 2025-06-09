import profilePic from './assets/react.svg';
function Card(){
return(
    <>
    <div className="card">
        <img className='card-image' src={profilePic} alt="profile picture"></img>
        <h2 className='card-title'>Bro Code</h2>
        <p className='card-text'>I make youtube video and play games</p>
    </div>
    </>
)
;
}

export default Card;