import React from 'react'
import './NewPost.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class NewPost extends React.Component {
    state = {
        title: '',
        content: '',
        author: 'Mohammadreza',
        submited: false
    }
    addPostHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post(`/posts`, data).then((response) => {
            console.log(response)
        })
    }
    submitHandler = () => {
        // this.props.addedPost(this.state);
        this.setState({ submited: true })
    }
    render() {
        let redirect = null
        this.state.submited && (redirect = <Redirect to="/" />)
        return (
            <div className="new-post">
                {redirect}
                <h2>Add a Post</h2>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(e) => { this.setState({ title: e.target.value }) }}
                />
                <label>Content</label>
                <textarea
                    rows="4"
                    value={this.state.value}
                    onChange={(e) => { this.setState({ content: e.target.value }) }}
                />
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={(e) => { this.setState({ author: e.target.value }) }}>
                    <option value="Mohammadreza">Mohammadreza</option>
                    <option value="MrezaH">MrezaH</option>
                </select>
                <button onClick={() => this.submitHandler()}>Add Post</button>
            </div>
        )
    }
}

export default NewPost