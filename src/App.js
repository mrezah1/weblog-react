import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Blog from './container/Blog/Blog'

const App = (props) => {
  return (
    <Router>
      <div>
        <Blog />
      </div>
    </Router>
  )
}

export default App