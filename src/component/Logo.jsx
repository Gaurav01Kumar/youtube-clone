import React from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import styles from '../style';

const Logo = () => {
  return (
    <div className="flex items-center ml-4">
    <FaPlayCircle className={`${styles.icon}`} />
    <h3 className={`${styles.heading3}`}>MyTube</h3>
  </div>
  )
}

export default Logo