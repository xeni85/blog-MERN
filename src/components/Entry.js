import '../App.css';

function Entry({title, summary, cover, content, createdAt}) {
  return (
    <div className="App-entries">
      <div className="img-container"><img src='https://www.reuters.com/resizer/ktfqVk7hp4GPemOD063ZbU-sKkQ=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SINBEWS2BZIFZPHAQEM44ABFVI.jpg' className="entry-img" alt="entry image" /></div>
      <div className="img-text">
        <h2>{title}</h2>
        <p className='entry-info'>
          <a className='entry-author'>
            Shkelzen Dunisha
          </a>
          <time className='entry-time'>
            {createdAt}
          </time>
        </p>
        <p className='entry-summary'>{summary}</p>
          </div>
      </div>
  )
}

export default Entry