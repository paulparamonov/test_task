import React, { useState , useEffect } from 'react'
import axios from 'axios';
import nextId from "react-id-generator";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.0";
import Album from '../Album/Album'
import Modal from '../Modal/Modal'


function Gallery() {
  const [modalActive, setModalActive] = useState()
  const [photos, setPhotos] = useState([])
  const [addPhoto, setAddPhoto] = useState({
    title: '',
    thumbnailUrl: ''
  })


  //Get Form Values
  const handleChange = (input) => (e) => {
    e.preventDefault()
    setAddPhoto({ ...addPhoto, [input]: e.target.value });
    
  }


  //Add Data 
  const handleAddPhoto = (e) => {
    e.preventDefault()

    const newPhoto = {
      id: nextId(),
      title: addPhoto.title,
      thumbnailUrl: addPhoto.thumbnailUrl
    }

    const newPhotos = [newPhoto ,...photos]
    setPhotos(newPhotos)
    
  }

  //Search Filter Data
  const [searchQuery, setSearchQuery] = useState("")
  function search() {
    return photos.filter(photo => photo.title.toLowerCase().indexOf(searchQuery) > - 1)

  }

  //Get Data From JSON Placeholder
  const fetchUrl = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchUrl)
      setPhotos(data.data)
      console.log(data.data);
      return data
    }
    fetchData()
  }, [fetchUrl])

  console.log(photos)
  

  return (
    <div className="container" style={{ marginTop:"10%" }}>
    <div style={{ marginBottom:"25px" }}>
      <input
      type="text"
      placeholder="search photo"
      className="search__input"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
       />
    </div>
    <div>
      <button className="open-btn" onClick={() => setModalActive(true)}>Add Photo + </button>
    </div>
    <div >
     <Album
       photos={search(photos)}
     />
      </div>
      <Modal 
        active={modalActive} setActive={setModalActive}
      >
      <form className="modal__form" onSubmit={handleAddPhoto}>
        <label>
        <input
          type="text"
          name="title"
          placeholder="заголовок"
          required
          onChange={handleChange("title")} />
        </label>
        <label>
        <input 
          type="text" 
          name="thumbnailUrl" 
          placeholder="введите url"
          required
          onChange={handleChange("thumbnailUrl")}
         />
        </label>
        <input type="submit" value="Отправить" onClick={() => setModalActive(false)}/>
</form>

      </Modal>
            
    </div>
  )
}

export default Gallery;
