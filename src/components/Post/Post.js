import React from 'react'
import './Post.css'
import FullPost from '../FullPost/FullPost'

const Post = (props) => {
    return (
        <article className="post" onClick={props.click}>
            <h1>{props.title}</h1>
            <div>
                <div className="author">{props.author}</div>
            </div>
        </article>
    )
}

export default Post