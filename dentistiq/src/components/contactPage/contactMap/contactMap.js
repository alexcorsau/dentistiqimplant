import React from 'react';
import './contactMap.module.css';

const Map = () => {
  return (
    // <div class="mapouter">
    // <div class="gmap_canvas">
    <iframe
      src='https://maps.google.com/maps?q=Baladei%201A%20Turda&t=k&z=17&ie=UTF8&iwloc=&output=embed'
      className='iframe_class'
      id='gmap_canvas'
      frameBorder='0'
      scrolling='no'
      marginHeight='0'
      marginWidth='0'
      title='map'
    ></iframe>
    // </div>
    // </div>
  );
};

export default Map;
