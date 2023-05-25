import React, { useState, useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectOrigen, selectDestino } from "../Redux/Slices/navSlice";
import puntoA from "../Iconos/point-a.png";
import puntoB from "../Iconos/point-b.png";
import taxiIcon from "../Iconos/taxi.png";
import "./map.css";

const Marker = ({ tipo }) => {
  return tipo === "destino" ? (
    <div className="SuperAwesomePin">
      <img src={puntoB} />
    </div>
  ) : (
    <div className="SuperAwesomePin">
      <img src={puntoA} />
    </div>
  );
};

const Marker_Taxi = () => {
  return (
    <div className="SuperAwesomePin">
      <img src={taxiIcon} />
    </div>
  );
};

export default function Map({ setCoordenadas, setLimites, coordenadas }) {
  const origen = useSelector(selectOrigen);
  const destino = useSelector(selectDestino);
  const [shouldRenderMarkers, setShouldRenderMarkers] = useState(false);
  const mapRef = useRef(null);
  console.log(origen);
  console.log(destino);

  const [directions, setDirections] = useState(null);
  console.log(mapRef);
  useEffect(() => {
    if (origen && destino) {
      const directionsService = new window.google.maps.DirectionsService();
      const originLatLng = new window.google.maps.LatLng(
        origen.location.lat,
        origen.location.lng
      );
      const destLatLng = new window.google.maps.LatLng(
        destino.location.lat,
        destino.location.lng
      );
      directionsService.route(
        {
          origin: originLatLng,
          destination: destLatLng,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
      setShouldRenderMarkers(true);
    }
  }, [origen, destino]);

  const renderMarkers = (map, maps) => {
    if (directions && maps && shouldRenderMarkers) {
      const directionsRenderer = new maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      directionsRenderer.setDirections(directions);
    }
  };

  const defaultProps = {
    center: {
      lat: origen,
      lng: destino,
    },
    zoom: 14,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        ref={mapRef}
        bootstrapURLKeys={{ key: "AIzaSyAETUpSaOntSOMh1PepKtpAejiCd6zn0x4" }}
        defaultCenter={coordenadas}
        center={coordenadas}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordenadas({ lat: e.center.lat, lng: e.center.lng });
          setLimites({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps, origen }) => {
          if (shouldRenderMarkers) {
            renderMarkers(map, maps);
          }
        }}
      >
        {origen && (
          <Marker
            lat={origen.location.lat}
            lng={origen.location.lng}
            tipo="origen"
          />
        )}
        {destino && (
          <Marker
            lat={destino.location.lat}
            lng={destino.location.lng}
            tipo="destino"
          />
        )}
        <Marker_Taxi lat={7.119349} lng={-73.1227416}/>
        <Marker_Taxi lat={7.126251736813315} lng={-73.11913258896054}/>
        <Marker_Taxi lat={7.128934510358317} lng={-73.1249690758172}/>
        <Marker_Taxi lat={7.121780412664762} lng={-73.1245184647192}/>
        <Marker_Taxi lat={7.117053536870815} lng={-73.11634309165035}/>
        <Marker_Taxi lat={7.111219397851121} lng={-73.10806043035765}/>
        <Marker_Taxi lat={7.116734151549234} lng={-73.10482032195982}/>
        <Marker_Taxi lat={7.106215606433078} lng={-73.11567790392209}/>
        <Marker_Taxi lat={7.120256297311277} lng={-73.11243555422374}/>
        <Marker_Taxi lat={7.132307520789598} lng={-73.12470934243295}/>
      </GoogleMapReact>
    </div>
  );
}
