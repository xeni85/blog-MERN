import '../App.css';

function Entry() {
  return (
    <div className="App-entries">
      <div className="img-container"><img src='https://www.reuters.com/resizer/ktfqVk7hp4GPemOD063ZbU-sKkQ=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SINBEWS2BZIFZPHAQEM44ABFVI.jpg' className="entry-img" alt="entry image" /></div>
      <div className="img-text">
        <h2>25,000 cases in one week and a call to arms: Morgan & Morgan’s battle with insurers</h2>
        <p className='entry-info'>
          <a className='entry-author'>
            Shkelzen Dunisha
          </a>
          <time className='entry-time'>
            2023-04-08 02:53
          </time>
        </p>
        <p className='entry-summary'>The Orlando-founded firm seemed to all but declare war in doing so. “It will be a serious internal offense if we find any courtesies being extended to the insurance industry,” wrote Morgan & Morgan’s chief operating officer in an internal memo (previously reported by the Tampa Bay Times) to all lawyers, which was shared with me by the firm.</p>
          </div>
      </div>
  )
}

export default Entry