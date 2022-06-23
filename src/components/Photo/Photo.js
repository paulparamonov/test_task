import React from 'react'
import './Photo.css'

function Photo({id , title , thumbnailUrl}) {
  return (
    <div className='photo__card'
         key={id}
    >
    <h4 className="photo__card__title">{title}</h4>
    <img src="https://via.placeholder.com/600/92c952.jpg" alt={id} width="200px" height="200px" />
    </div>
  )
}

export default Photo;