import '../App.css';
import {format} from 'date-fns';
import {Link} from 'react-router-dom';

function Entry({_id, title, summary, cover, content, createdAt, author}) {
  return (
    <div className="App-entries">
      <div className="img-container">
        <Link to={`/post/${_id}`}> <img src={'http://localhost:3001/'+cover} alt="entry image" /></Link>
        </div>
      <div className="img-text">
        <Link to={`/post/${_id}`}><h2>{title}</h2></Link>
        <p className='entry-info'>
          <a className='entry-author'>
            {author.username}
          </a>
          <time className='entry-time'>
            {format(new Date(createdAt), 'MMMM d, yyyy HH:mm')}
          </time>
        </p>
        <p className='entry-summary'>{summary}</p>
          </div>
      </div>
  )
}

export default Entry