import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import Img1 from './images/car1.jpg';
import Img2 from './images/fw1.jpg';
import Img3 from './images/roll1.jpg';
import Img4 from './images/ws1.jpg';
import Img5 from './images/car2.jpg';
import Img6 from './images/fw2.jpg';
import Img7 from './images/roll2.jpg';
import Img8 from './images/ws2.jpg';
import Img9 from './images/car3.jpg';
import Img10 from './images/fw3.jpg';
import Img11 from './images/roll3.jpg';
import Img12 from './images/ws3.jpg';
import Img13 from './images/car4.jpg';
import Img14 from './images/fw4.jpg';
import Img15 from './images/roll4.jpg';
import Img16 from './images/ws4.jpg';

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'} alt="">
        <img src={tempimgSrc} alt="" />

        {/* CLICK EVENT THAT CHANGES setModel TO FALSE CLOSING IT */}
        <CancelIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
