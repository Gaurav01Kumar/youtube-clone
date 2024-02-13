import React from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import styles from '../style';
import {Link} from "react-router-dom"
const Logo = () => {
  return (
    <Link to="/" className='cursor-pointer'>
    <div className="flex items-center ml-4">
    
    <FaPlayCircle className={`${styles.icon}`} />
    <h3 className={`${styles.heading3}`}>MyTube</h3>
    
  </div>
  </Link>
  )
}

export default Logo