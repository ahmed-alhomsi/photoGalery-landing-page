import React from 'react'
import { useState } from "react"
import { useEffect } from "react"

function Loading() {
    const [dots, setDots] = useState(0);
    const [dotsString, setDotsString] = useState('');
    
    useEffect(() => {
        const timeoutFunc = () => {
            setTimeout(() => {
                if(dots < 3) {
                    setDots(prevDots => prevDots + 1);
                } else {
                    setDots(0);
                }
                let string = '';
                for(let i = 0; i < dots; i++) {
                    string += '.';
                }
                setDotsString(string);
            }, 500);
        }
        timeoutFunc();

        return clearTimeout(timeoutFunc)
    }, [dots])

    return (
        <h1 className='loading'>Loading{dotsString}</h1>
    )
}

export default Loading