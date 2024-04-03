import {Component} from 'react'
import BlogItem from '../BlogItem'

import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogList: [], isLoaderActive: true}
  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const rawData = await fetch('https://apis.ccbp.in/blogs')
    const convertedData = await rawData.json()
    console.log(convertedData)
    const updatedData = convertedData.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    console.log(updatedData)
    this.setState({blogList: updatedData, isLoaderActive: false})
  }
  render() {
    const {blogList, isLoaderActive} = this.state
    return (
      <div>
        {isLoaderActive ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              color="#000000"
              height={20}
              width={20}
            ></Loader>
          </div>
        ) : (
          <ul className="blog-list-ul-container">
            {blogList.map(eachItem => (
              <BlogItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
