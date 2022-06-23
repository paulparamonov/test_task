import React from 'react';
import Photo from '../Photo/Photo';
import './Album.css'


const Album = ({photo ,photos}) => {


console.log(photos)

  return (
    <div className="album__list">
     {
        photos.map((photo) => (
          <Photo id={photo.id} key={photo.id} title={photo.title} src={photo.thumbnailUrl} />
        ))
      }
    </div>
  )
}

export default Album;