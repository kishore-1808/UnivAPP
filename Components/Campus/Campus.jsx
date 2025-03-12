import React from 'react'
import './Campus.css'
import gallery3 from './gallery3.jpeg'
import gallery5 from './gallery5.png'
import gallery7 from './gallery7.png'
import gallery8 from './gallery8.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Campus = () => {
  return (
    <div className='campus'>
        <div class="gallery">
            <img src={gallery3} alt=''/>
            <img src={gallery5} alt=''/>
            <img src={gallery7} alt=''/>
            <img src={gallery8} alt=''/>
        </div>
        <button className='btn dark-btn'>See more here<FaLongArrowAltRight /></button>
    </div>
  )
}

export default Campus