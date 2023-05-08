import React from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectOrigen, selectDestino } from "../Redux/Slices/navSlice";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){

    const origen = useSelector(selectOrigen)
    const destino = useSelector(selectDestino)

    console.log(origen)
    console.log(destino)
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAETUpSaOntSOMh1PepKtpAejiCd6zn0x4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}