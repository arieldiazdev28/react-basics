const ProfilePicture = () => {
    const imageUrl = './src/assets/ariel-diaz.jpg';
    const handleClick = (e) => e.target.style.display = "none";

  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile Picture" />
  )
}

export default ProfilePicture