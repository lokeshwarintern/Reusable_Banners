import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails
  return (
    <li className={`list-item ${className}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="btn-ele" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
