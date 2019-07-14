import React, { useState } from 'react'

const AddBlogForm = props => {
	const initialFormState = { id: null, title: '',date:'', tag:'', content: '' }
	const [ blog, setBlog ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setBlog({ ...blog, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!blog.title || !blog.tag || !blog.content) return

				props.addBlog(blog)
				setBlog(initialFormState)
			}}
		>
			<label>Title</label>
			<input type="text" name="title" value={blog.title} onChange={handleInputChange} />
			<br/>
			<label>Tag</label>
			<input type="text" name="tag" value={blog.tag} onChange={handleInputChange} />
			<br/>
			<label>Content</label>
			<input type="text" name="content" value={blog.content} onChange={handleInputChange} />
			<br/>
			<button>Add new blog</button>
		</form>
	)
}

export default AddBlogForm
