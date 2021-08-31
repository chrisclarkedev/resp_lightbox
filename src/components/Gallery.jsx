import React from 'react';
import Image1 from './images/car1.jpg';
import Image2 from './images/fw1.jpg';
import Image3 from './images/roll1.jpg';
import Image4 from './images/ws1.jpg';

export default function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: 'Image1',
    },
    {
      id: 2,
      imgSrc: 'Image2',
    },
    {
      id: 3,
      imgSrc: 'Image3',
    },
    {
      id: 4,
      imgSrc: 'Image4',
    },
  ];
  return (
    <div class="gallery">
      <h1>Gallery</h1>
      <>
        <div>{console.log(data)}</div>
      </>
    </div>
  );
}
