import '../Styles/GoogleMap.css'
import React from 'react'
const googleAPI_key = "AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk";


const GoogleMap = ({ latLongStr }) => {

    const googleAPI_src = `https://www.google.com/maps/embed/v1/place?q=${latLongStr}&key=${googleAPI_key}`;


    return (
        <div>
            {
                latLongStr &&
                <iframe
                    id="myGoogleMapIframe"
                    loading="lazy"
                    src={googleAPI_src}>
                </iframe>
            }
        </div>

    );
};

export default GoogleMap;