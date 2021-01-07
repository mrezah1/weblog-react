import React from 'react'
import axios from 'axios'
import Loading from '../../../components/Loading/Loading'
import Post from '../../../components/Post/Post'
import { Link } from 'react-router-dom'
import './Posts.css'

class Posts extends React.Component {
    state = {
        posts: null,
        // selectPostId: null,
        error: false
    }
    componentDidMount() {
        axios.get('/posts').then((response) => {
            const posts = response.data.slice(0, 9);
            const updatedPosts = posts.map(item => {
                return {
                    ...item,
                    author: 'Mreza'
                }
            })
            this.setState({ posts: updatedPosts })
        })
            .catch((err) => {
                this.setState({ error: true })
            })
    }
    selectPostHandler = (id) => {
        this.props.history.push(`/${id}`)
    }
    addPostHandler = (item) => {
        let postIdList = this.state.posts.map(item => item.id);
        postIdList = postIdList.length === 0 ? [0] : postIdList;
        item['id'] = Math.max(...postIdList) + 1;
        const prevPosts = [...this.state.posts];
        prevPosts.push(item);
        this.setState({ posts: prevPosts });
    }
    deletePostHandler = (id) => {
        const posts = [...this.state.posts];
        const findPost = posts.findIndex(item => item.id == id);
        posts.splice(findPost, 1);
        // check selectPostId
        let currentId;
        // check has lasted item
        if (this.state.posts[findPost + 1] == undefined) {
            try {
                currentId = this.state.posts[findPost - 1].id;
            }
            catch (e) {
                // if exist just one items
                currentId = null;
            }
        }
        else
            currentId = this.state.posts[findPost + 1].id
        this.setState({ posts: posts, selectPostId: currentId })
    }
    render() {
        let posts = <p className="error">Load Posts Failed!</p>
        if (!this.state.error)
            posts = this.state.posts ?
                this.state.posts.map((item) => (
                    <Post
                        key={item.id}
                        title={item.title}
                        author={item.author}
                        click={() => { this.selectPostHandler(item.id) }} />
                ))
                : <Loading />
        return <section className="posts">{posts}</section>
    }
}

export default Posts