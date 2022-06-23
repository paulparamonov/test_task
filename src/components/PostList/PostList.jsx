import React from 'react';
import Post from '../Post/Post';


const PostList = ({post ,posts}) => {


console.log(posts)

  return (
    <>
     {
        posts.map((post) => (
          <Post id={post.id} key={post.id} title={post.title} body={post.body} />
        ))
      }
    </>
  )
}

export default PostList;