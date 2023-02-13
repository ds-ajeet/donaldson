import * as React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import marker from "../../images/MGMpin.svg";
import { googleApikey } from "../../../sites-global/global";

const containerStyle = {
  width: "100%",
  height: "100%",
};

var center = {
  lat: 0.0,
  lng: 0.0,
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
};

type props = {
  prop: any;
};

function CustomMap(coords: props) {
  React.useEffect(() => {
    center = {
      lat: coords.prop.latitude,
      lng: coords.prop.longitude,
    };
  });
  console.log(coords,"customMap");
  return (
    <LoadScript googleMapsApiKey={googleApikey}>
      {coords.prop.latitude && coords.prop.longitude?<> <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: coords.prop && coords.prop.latitude,
          lng: coords.prop && coords.prop.longitude,
        }}
        zoom={10}
        options={{
          styles:[
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ],
        }}
      >
        <Marker
          position={{
            lat: coords.prop && coords.prop.latitude,
            lng: coords.prop && coords.prop.longitude,
          }}
          icon={marker}
        />
      </GoogleMap></>:<></>

      }
     
    </LoadScript>
  );
}

export default CustomMap;
