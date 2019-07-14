import React,{ useState } from 'react'
import ReactDOM from 'react-dom'
import {getTimeStamp} from './utils/TimeHelper'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import BlogDetail from './components/BlogDetail'

// Data
const blogsData = [
    { id: 1, title: "21 Best Dishes to Eat When You’re in Pakistan!", date:"1:25:4", tag: "food", content: "Nihari begins as a heap of dry spices frying in vegetable oil and animal fat. The meat ingredients follow (most commonly beef shank), and a very healthy portion of Desi Ghee (home-made local clarified butter). The slow-cooking stew is then stirred altogether in a glorious cauldron of a pot." },
    { id: 2, title: "Angela Ceresnie – CEO of Climb Credit on Helping to Finance People’s Career Transitions", date:"5:35:17", tag: "business", content: "Angela Ceresnie is the CEO of Climb Credit. She has experience working in and starting multiple startups. She has led teams at Citibank and American Express. Interestingly, she studied computer engineering at the University of Michigan with a technical background. " },
    { id: 3, title: "10 Best Meals in 2018", date:"12:43:4", tag: "travel and food", content: "It turned out to be one of the best days in Mexico, being invited to a family home (thanks to our driver Javier and his family), buying all the ingredients, and making Oaxacan mole from scratch." },
]

//Conected App will render between the App and BlogDetail component with navigation by using React Router. 
//It will take the updated blog list with the added value to show in the blog table and navigate to the blog detail page
const ConnectedApp = ()=>{

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
