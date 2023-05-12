import React from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectOrigen, selectDestino } from "../Redux/Slices/navSlice";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({setCoordenadas, setLimites, coordenadas}){

    const origen = useSelector(selectOrigen)
    const destino = useSelector(selectDestino)

    console.log(origen)
    console.log(destino)
  const defaultProps = {
    center: {
      lat: origen,
      lng: destino
    },
    zoom: 14
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAETUpSaOntSOMh1PepKtpAejiCd6zn0x4" }}
        defaultCenter={coordenadas}
        center={coordenadas}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordenadas({ lat: e.center.lat, lng: e.center.lng});
          setLimites({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
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