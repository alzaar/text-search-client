import { useState } from 'react'
import PropTypes from 'prop-types'
import "./card.css"

function Card({ data }) {
  const [showInfo, setShowInfo] = useState(false)
  const displayInfo = (e) => {
    setShowInfo(!showInfo)
  }
  let content = (
    <div>
      <div className="content">
        {data.content}
      </div>
      <div className="infallible">
        {data.infallible}
      </div>
    </div>
  )

  if (showInfo) {
    content = (
      <div className="content">
        <div className='details'>
          <div style={{padding: '5px'}}>{data.content}</div>
          <div style={{padding: '5px'}}>{data.infallible}</div>
          <div style={{padding: '5px'}}>{data.author}</div>
          <div style={{padding: '5px'}}>{data.book_title}</div>
          <div style={{padding: '5px'}}>{data.reference}</div>
          <a rel='noreferrer' style={{padding: '3px 5px 3px 5px', color: 'inherit'}} href={data.link} target='_blank'>Link</a>
        </div>
      </div>
    )
  }
  return (
    <div className="card-container" onClick={displayInfo}>
      <div className="card-content">
        {content}
        <div className={`arrow ${showInfo ? 'up' : 'down'}`}/>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

Card.defaultProps = {
  data: {
    author: "Husayn Naghavi",
    book_title: "Pearls of Wisdom: A Selection of hadiths from the Prophet Muhammad",
    content: "God's kindness towards His creatures is more than a mother's towards her baby",
    id: "90df2db1-60b6-4ffa-bef8-2f2576b2e09b",
    link: "https://www.al-islam.org/message-thaqalayn/vol-10-n-3-autumn…wisdom-selection-hadiths-prophet-muhammad/pearls#god-and-man",
    reference: "Rawdat al-Wa‘izin, p. 503."
  }
}

export default Card