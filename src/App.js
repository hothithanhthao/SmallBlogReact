import React, { useState, Fragment } from 'react'
import AddBlogForm from './forms/AddBlogForm'
import EditBlogForm from './forms/EditBlogForm'
import BlogTable from './tables/BlogTable'
import {getTimeStamp} from './utils/TimeHelper'

const App = ({blogs,setBlogs,addBlog}) => {
	
	const initialFormState = { id: null, title: "", date: "", tag:"", content: "" }

	// Setting state
	//const [ blogs, setBlogs ] = useState(blogsData)
	const [ currentBlog, setCurrentBlog ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	const deleteBlog = id => {
		setEditing(false)

		setBlogs(blogs.filter(blog => blog.id !== id))
	}

	const updateBlog = (id, updatedBlog) => {
		setEditing(false)

		setBlogs(blogs.map(blog => (blog.id === id ? updatedBlog : blog)))
	}

	const editRow = blog => {
		setEditing(true)

		setCurrentBlog({ id: blog.id, title: blog.title, date: getTimeStamp() ,tag: blog.tag ,content: blog.content })
	}

	return (
		<div className="container">
			<h1>Small Blog App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Blog</h2>
							<EditBlogForm
								editing={editing}
								setEditing={setEditing}
								currentBlog={currentBlog}
								updateBlog={updateBlog}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Blog</h2>
							<AddBlogForm addBlog={addBlog} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Blogs</h2>
					<BlogTable blogs={blogs} editRow={editRow} deleteBlog={deleteBlog} />
				</div>
			</div>
		</div>
	)
}

export default App
