import React from "react";
import styles from './contactMap.module.css'


const Map = () =>{
    return(
        // <div class="mapouter">
            // <div class="gmap_canvas">
                <iframe 
                    src="https://maps.google.com/maps?q=Baladei%201A%20Turda&t=k&z=17&ie=UTF8&iwloc=&output=embed" 
                    className="iframe_class"
                    id="gmap_canvas" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0">
                </iframe>
            // </div>
        // </div>
    )
}

export default Map;


