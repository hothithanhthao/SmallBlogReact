import React, { useState, useEffect } from 'react'

const EditBlogForm = props => {
  const [ blog, setBlog ] = useState(props.currentBlog)

  useEffect(
    () => {
      setBlog(props.currentBlog)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setBlog({ ...blog, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateBlog(blog.id, blog)
      }}
    >
      <label>Title</label>
      <input type="text" name="title" value={blog.title} onChange={handleInputChange} />
      <label>Tag</label>
      <input type="text" name="tag" value={blog.tag} onChange={handleInputChange} />
      <label>Content</label>
      <input type="text" name="content" value={blog.content} onChange={handleInputChange} />
      <button>Update Blog</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditBlogForm
