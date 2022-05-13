import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

function Image({ image, arabicDescription, englishDescription, isEnglish }) {
  
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className='card' data-aos="fade-up">
      <div className='image-container'>
        <img className='card-image' src={image} alt="some image" />
      </div>
        <div className='card-container'>
          <p>{isEnglish ? englishDescription : arabicDescription}</p>
          <a className='card-btn' href={image} target="_blank">{isEnglish ? 'original picture' : 'الصورة الأصلية'}</a>
        </div>
    </div>
  )
}

export default Image