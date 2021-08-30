import React from 'react';

export default function Gallery() {
  return (
    <div class="gallery">
      <li class="buttons" data-filter="all">
        all
      </li>
      <li class="buttons" data-filter="ferris wheels">
        ferris wheels
      </li>
      <li class="buttons" data-filter="rollercoasters">
        rollercoasters
      </li>
      <li class="buttons" data-filter="carousels">
        carousels
      </li>
      <li class="buttons" data-filter="water slides">
        water slides
      </li>
    </div>
  );
}
