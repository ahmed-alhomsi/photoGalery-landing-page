import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef } from "react"

function AdsSlider() {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if(number > 2) {
        return 0;
    }
    if(number < 0) {
        setIndex(2);
    }
    return number;
  }

  const nextSlide = () => {
      setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
      })
  }

  const previousSlide = () => {
      setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber(newIndex);
      })
  }

  return (
    <section className='flex'>
        <FontAwesomeIcon className='left-arrow' icon={faArrowAltCircleLeft} onClick={previousSlide}></FontAwesomeIcon>
        <div className={`ads-container flex step-${index}`}>
            <figure>
                <img className='ad-image' src='https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </figure>
            <figure>
                <img className='ad-image' src='https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1616197151166-93dc9b4528d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1600354587397-681c16c184bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>

            <figure>
                <img className='ad-image' src='https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </figure>
            <figure>
                <img className='ad-image' src='https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1616197151166-93dc9b4528d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1600354587397-681c16c184bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            
            <figure>
                <img className='ad-image' src='https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </figure>
            <figure>
                <img className='ad-image' src='https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1616197151166-93dc9b4528d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <figure>
                <img className='ad-image' src="https://images.unsplash.com/photo-1600354587397-681c16c184bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
        </div>
        <FontAwesomeIcon className='right-arrow' icon={faArrowAltCircleRight} onClick={nextSlide}></FontAwesomeIcon>
    </section>
  )
}

export default AdsSlider