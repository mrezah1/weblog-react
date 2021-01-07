import React from 'react'
import axios from 'axios'
import './FullPost.css'
import Loading from '../../../components/Loading/Loading'

class FullPost extends React.Component {
    state = {
        loadedPost: null
    }
    componentDidMount() {        
        if (this.props.match.params.id) {
            if (!this.state.loadedPost ||
                (this.state.loadedPost && this.props.match.params.id !== this.state.loadedPost.id))
                axios.get(`/posts/${this.props.match.params.id}`)
                    .then((response) => {
                            this.setState({ loadedPost: response.data })
                    })
        }
        else if (this.state.loadedPost) {
            this.setState({ loadedPost: '' })
        }
    }
    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.match.params.id}`).then((response) => {
            console.log(response)
        })
    }
    render() {
        console.log(this.props)
        let post = <p className="anim">Please Select a Post...</p>
        if (this.props.match.params.id) {
            post = <Loading />
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
        else if (this.state.loadedPost === '')
            post = <p className="error">Not Exist Post!'</p>;
        return post
    }
}

export default FullPost