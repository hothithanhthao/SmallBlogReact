import React,{ useState } from 'react'
import ReactDOM from 'react-dom'
import {getTimeStamp} from './utils/TimeHelper'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import BlogDetail from './components/BlogDetail'

// Data
const blogsData = [
    { id: 1, title: "Lorem ipsum dolor", date:"1:25:4", tag: "travel and food", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" },
    { id: 2, title: "Duis aute irure dolor", date:"5:35:17", tag: "travel and food", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 3, title: "reprehenderit in voluptate", date:"12:43:4", tag: "travel and food", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
]

const ConnectedApp = ()=>{
        // CRUD operations
    const [ blogs, setBlogs ] = useState(blogsData)

	const addBlog = blog => {
		blog.id = blogs.length + 1
		blog.date = getTimeStamp()
		setBlogs([ ...blogs, blog ])
	}
    return(
    <Router>
      <Switch>
          <Route exact path={`/`} render={() => (<App blogs ={blogs} setBlogs ={setBlogs} addBlog = {addBlog}/>)} />
          <Route path={`/:title`} render={(props) => (<BlogDetail blogs = {blogs} {...props}/>)} />
      </Switch>
  </Router>

);}

ReactDOM.render(<ConnectedApp/>, document.getElementById('root'))
