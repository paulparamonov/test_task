import React, { useState , useEffect } from 'react'
import axios from 'axios';
import nextId from "react-id-generator";
import PostList from '../PostList/PostList';
import Modal from '../Modal/Modal'


function Home() {
  const [modalActive, setModalActive] = useState()
  const [posts, setPosts] = useState([])
  const [addPost, setAddPost] = useState({
    title: '',
    body: ''
  })


  //Get Form Values
  const handleChange = (input) => (e) => {
    e.preventDefault()
    setAddPost({ ...addPost, [input]: e.target.value });
    
  }


  //Add Data 
  const handleAddPost = (e) => {
    e.preventDefault()

    const newPost = {
      id: nextId(),
      title: addPost.title,
      body: addPost.body
    }

    const newPosts = [newPost ,...posts]
    setPosts(newPosts)
    
  }

  //Search Filter Data
  const [searchQuery, setSearchQuery] = useState("")
  const keys = ["title" , "body"]
  function search() {
    return posts.filter(
      (item) =>
      keys.some(key=>item[key].toLowerCase().indexOf(searchQuery) > - 1)
    );

  }

  //Get Data From JSON Placeholder
  const fetchUrl = "https://jsonplaceholder.typicode.com/posts"
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchUrl)
      setPosts(data.data)
      console.log(data.data);
      return data
    }
    fetchData()
  }, [fetchUrl])

  console.log(posts)
  

  return (
    <div className="container" style={{ marginTop:"10%" , height:"100%"}}>
    <div style={{ marginBottom:"25px" }}>
      <input
      type="text"
      placeholder="search post"
      className="search__input"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
       />
      <select >
         <option>по наименованию</option>
         <option>по содержанию</option>
       </select>
    </div>
    <div>
      <button className="open-btn" onClick={() => setModalActive(true)}>Add Post + </button>
    </div>
    <div>
     <PostList
       posts={search(posts)}
     />
    </div>
      <Modal 
        active={modalActive} setActive={setModalActive}
      >
      <form className="modal__form" onSubmit={handleAddPost}>
        <label>
        <input
          type="text"
          name="title"
          placeholder="заголовок"
          required
          onChange={handleChange("title")} />
        </label>
        <label>
        <textarea 
          type="text" 
          name="body" 
          placeholder="введите текст"
          required
          onChange={handleChange("body")}
         />
        </label>
        <input type="submit" value="Отправить" onClick={() => setModalActive(false)}/>
</form>

      </Modal>
            
    </div>
  )
}

export default Home;
