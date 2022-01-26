import React from "react";
import styles from './contactMap.module.css'


const Map = () =>{
    return(
        <>
        {/* <div class="mapouter">
                <iframe 
                    // width="700" 
                    width="100%"
                    // height='80 vh'
                    height="100%"
                    // min-height="400"
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=Baladei%201A%20Turda&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0">
                </iframe>
        </div> */}
        <>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe 
                        width="700" 
                        height="500" 
                        id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=Baladei%201A%20Turda&t=k&z=17&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0"
                    >
                    </iframe>
                    {/* <a href="https://www.whatismyip-address.com/divi-discount/">where are you??</a> */}
                    <br/>
                    {/* <style>
                        .mapouter{position:relative;text-align:right;height:500px;width:700px;}
                    </style> */}
                    {/* <a href="https://www.embedgooglemap.net">google iframe map</a> */}
                    {/* <style>
                        {.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:700px;}}
                    </style> */}
                </div>
            </div>
        </>

        </>
    )
}

export default Map;