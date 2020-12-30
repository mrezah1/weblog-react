import React from 'react'
import axios from 'axios'
import './FullPost.css'

class FullPost extends React.Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate() {
        if (this.props.postId) {
            if (!this.state.loadedPost ||
                (this.state.loadedPost && this.props.postId !== this.state.loadedPost.id))
                axios.get(`/posts/${this.props.postId}`)
                    .then((response) => {
                        this.setState({ loadedPost: response.data })
                    })
        }
        else if (this.state.loadedPost) {
            this.setState({ loadedPost: '' })
        }
    }
    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`).then((response) => {
            console.log(response)
        })
    }
    render() {
        let post = <p className="anim">Please Select a Post...</p>
        if (this.props.postId) {
            post = <p className="spin"></p>
        }
            if (this.state.loadedPost) {
                post = (
                    <div className="full-post">
                        <h2>{this.state.loadedPost.title}</h2>
                        <p>{this.state.loadedPost.body}</p>
                        <div>
                            <button className="delete"
                                onClick={() => this.props.deletePost(this.state.loadedPost.id)}>
                                Delete</button>
                        </div>
                    </div>
                )
            }
            else if (this.state.loadedPost == '')
                post = <p className="error">Not Exist Post!'</p>;
        return post
    }

}

export default FullPost