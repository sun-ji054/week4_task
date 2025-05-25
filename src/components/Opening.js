// components/Opening.js
import React from 'react';
import openingBg from '../assets/opening_background.jpg';

export default function Opening() {
  return (
    <>
      <div className='opening'>
        <p className='openingMent' >Welcome<br />to my<br />PAGE</p>
         <div
        className="opening_image"
        style={{ backgroundImage: `url(${openingBg})` }}></div>

       {/*<div className='opening_image' alt='background'></div>
      </div>
      <div className='background'>*/}</div>
    </>
  );
}

