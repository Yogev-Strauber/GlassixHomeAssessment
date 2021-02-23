import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import GoogleMap from '../Components/GoogleMap'
const ipdataApiKey = "dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e";

const GetIpData = () => {

    const [countryName, set_countryName] = useState("");
    const [cityName, set_cityName] = useState("");
    const [latLongStr, set_latLongStr] = useState("");


    const fetchData = () => {
        let request = new XMLHttpRequest();

        request.open('GET', `https://api.ipdata.co/?api-key=${ipdataApiKey}`);

        request.setRequestHeader('Accept', 'application/json');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                const ipData = JSON.parse(this.responseText);
                set_countryName(ipData.country_name);
                set_cityName(ipData.city);
                set_latLongStr(`${ipData.latitude},${ipData.longitude}`);
            }
        };
        request.send();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div id="headersContainer">
            <Header formOfPopulation="Country" name={countryName} />
            <Header formOfPopulation="City" name={cityName} />
            <GoogleMap latLongStr={latLongStr} />
        </div>
    );
};

export default GetIpData;


