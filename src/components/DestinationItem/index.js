// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-container">
      <img src={imgUrl} className="destionation-img" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
