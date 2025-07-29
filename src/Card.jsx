import profilePic from './assets/ariel-diaz.jpg';
const Card = () => {
  return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="Profile Picture" />
        <h2 className="card-title">Ariel Díaz</h2>
        <p className="card-text">I study computer's science degree and play the guitar</p>
    </div>
  )
}

export default Card