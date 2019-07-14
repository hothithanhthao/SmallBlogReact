import React from 'react'
import {Link} from 'react-router-dom';

// BlogTable will show list of blogs with Title, Date Posted, Content, Tags as the table format 
// You also can edit or delete blogs from this blog table
const BlogTable = props => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Date Posted</th>
        <th>Content</th>
        <th>Tags</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.blogs.length > 0 ? (
        props.blogs.map(blog => (
          <tr key={blog.id}>
            <td><Link to={`/${blog.title}`}>{blog.title}</Link></td>
            <td>{blog.date}</td>
            <td>{blog.tag}</td>
            <td>{blog.content}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(blog)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteBlog(blog.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
          
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Blogs</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default BlogTable
