function ProfilePicture(){
    const imageUrl="./src/assets/react.svg";
    const handleClick = (e)=>{
        e.target.style.display="none";
    }
    return (
        <img src={imageUrl}  onClick={(e)=>handleClick(e)} width={500}></img>
    );
}
export default ProfilePicture;