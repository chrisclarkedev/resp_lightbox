import React from 'react';
import Img1 from './images/car1.jpg';
import Img2 from './images/car2.jpg';
import Img3 from './images/car3.jpg';

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: 'Img1',
    },
    {
      id: 2,
      imgSrc: 'Img2',
    },
    {
      id: 3,
      imgSrc: 'Img3',
    },
  ];

  return (
    <>
      <div className="gallery">
        {data.map((id, index) => {
          return (
            <div className="pics" key={index}>
              <img src={id.imgSrc} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
