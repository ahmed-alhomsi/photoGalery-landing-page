import React from 'react'
import Image from "./Image"

function Images({ images, isEnglish }) {
  const imageElements = images.map( image => {
    return <Image key={image.id} image={image.image} arabicDescription={image.arabicDescription} englishDescription={image.englishDescription} isEnglish={isEnglish} />
  });

  return (
    <section className='flex cards-container'>
      {imageElements}
    </section>
  )
}

export default Images