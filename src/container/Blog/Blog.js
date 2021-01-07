import React from 'react'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route, Link, Switch } from 'react-router-dom'
import FullPost from './FullPost/FullPost'
import './Blog.css'

class Blog extends React.Component {
    render() {
        return (
            <div className="blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                search: "sort=AEC"
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                    <Route render={() => <h2 style={{textAlign:'center'}}>Not Found!</h2>} />
                </Switch>
            </div>
        )
    }
}

export default Blog