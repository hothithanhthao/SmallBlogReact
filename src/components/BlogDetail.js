import React from 'react'


const BlogDetail = ({match,blogs}) => {
  const blog = blogs.find(p => p.title === match.params.title);
  
  return (
    <div className="blog-detail-content">
      <h1>{blog.title}</h1>
      <div>{blog.date}</div>
      <div> {blog.tag}</div>
      <div>{blog.content}</div>  
    </div>
  );
};


export default BlogDetail