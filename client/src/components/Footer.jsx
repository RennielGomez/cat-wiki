import React from 'react';
import catWikiLogo from '../assets/CatwikiLogo.svg'
function Footer() {
  return (
    <div className='curve-top bg-black flex justify-between items-center px-6 py-2 clear-both'>
        <img className='white-svg' src={catWikiLogo} alt="CatWiki Logo" />
        <span className='text-white'>© created by Renniel Gomez - devChallenge.io 2023</span>
    </div>
  )
}

export default Footer