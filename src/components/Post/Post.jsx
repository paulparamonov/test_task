import React from 'react'
import './Post.css'

function Post({id , title , body}) {
  return (
    <div className='post'
         key={id}
    >
    <h4 className="post__title">{title}</h4>
    <p>{body}</p>
    </div>
  )
}

export default Post;
