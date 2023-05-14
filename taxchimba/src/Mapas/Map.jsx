import React, { useState, useEffect, useRef } from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectOrigen, selectDestino } from "../Redux/Slices/navSlice";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({setCoordenadas, setLimites, coordenadas}){

    const origen = useSelector(selectOrigen)
    const destino = useSelector(selectDestino)
    const [shouldRenderMarkers, setShouldRenderMarkers] = useState(false);
    const mapRef = useRef(null)
    console.log(origen)
    console.log(destino)

    const [directions, setDirections] = useState(null);
    console.log(mapRef)
    useEffect(() => {
        if (origen && destino) {
            const directionsService = new window.google.maps.DirectionsService();
            const originLatLng = new window.google.maps.LatLng(origen.location.lat, origen.location.lng);
            const destLatLng = new window.google.maps.LatLng(destino.location.lat, destino.location.lng);
            directionsService.route(
                {
                    origin: originLatLng,
                    destination: destLatLng,
                    travelMode: window.google.maps.TravelMode.DRIVING
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
    }
    
    const defaultProps = {
        center: {
            lat: origen,
            lng: destino
        },
        zoom: 14
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                ref={mapRef}
                bootstrapURLKeys={{ key: "AIzaSyAETUpSaOntSOMh1PepKtpAejiCd6zn0x4" }}
                defaultCenter={coordenadas}
                center={coordenadas}
                defaultZoom={defaultProps.zoom}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordenadas({ lat: e.center.lat, lng: e.center.lng });
                    setLimites({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onGoogleApiLoaded={({ map, maps }) => {
                     if (shouldRenderMarkers) {
                        renderMarkers(map, maps)
                     }
                }}
            >
            
            </GoogleMapReact>
        </div>
    );
}
