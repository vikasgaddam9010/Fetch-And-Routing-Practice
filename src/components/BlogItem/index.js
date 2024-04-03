import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  render() {
    const {eachItem} = this.props
    const {author, avatarUrl, id, imageUrl, title, topic} = eachItem
    return (
      <Link to={`/blogs/${id}`} className="text-decoration-none">
        <li className="d-flex link-css ">
          <img className="img-half-card" src={imageUrl} />
          <div className="remain-half-container">
            <p className="remain-half-container">{topic}</p>
            <h1 className="remain-half-container">{title}</h1>
            <div className="d-flex avatar-and-img">
              <img className="avatar-img" src={avatarUrl} />
              <p className="remain-half-container">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
