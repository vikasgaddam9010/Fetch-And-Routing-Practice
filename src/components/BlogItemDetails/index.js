import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoaderActive: true}
  componentDidMount() {
    this.getBlogDetails()
  }
  getBlogDetails = async () => {
    const {id} = this.props.match.params
    console.log(id)
    const getData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await getData.json()
    const updated = {
      id: jsonData.id,
      title: jsonData.title,
      imageUrl: jsonData.image_url,
      avatarUrl: jsonData.avatar_ur,
      author: jsonData.author,
      content: jsonData.content,
    }
    this.setState({blogDetails: updated, isLoaderActive: false})
  }
  render() {
    const {blogDetails, isLoaderActive} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} =
      this.state.blogDetails
    return (
      <div className="container">
        {isLoaderActive ? (
          <Loader
            type="TailSpin"
            color="#000000"
            height={20}
            width={20}
          ></Loader>
        ) : (
          <div className="bolg-card">
            <h1 className="head">{title}</h1>
            <div className="d-flex">
              <img className="avatar-img" src={avatarUrl} />
              <p>{author}</p>
            </div>
            <img alt={title} className="img" src={imageUrl} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
