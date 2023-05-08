import React, {useState} from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setOrigen, setDestino } from "../Redux/Slices/navSlice";
const Autocompletado = ({descripcion, info_geo}) => {
    const dispatch = useDispatch()
    const [direccion, setDireccion] = useState();
    const [coordenadas, setCoordenadas] = useState({
        lat: null,
        lng: null
    });
    console.log('Direccion: '+direccion)
    console.log('Coordenadas : '+coordenadas)

    const handleSelect = async value => {
        if (info_geo == 1) {
            const results = await geocodeByAddress(value);
            const ll = await getLatLng(results[0]);
            setDireccion(value)
            setCoordenadas(ll)
            dispatch(setOrigen({
                description: direccion,
                location: ll
            }));
        } else {
            const results = await geocodeByAddress(value);
            const ll = await getLatLng(results[0]);
            setDireccion(value)
            setCoordenadas(ll)
            dispatch(setDestino({
                description: direccion,
                location: ll
            }))
        }
    }
  return (
    <PlacesAutocomplete
      value={direccion}
      onChange={setDireccion}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: descripcion,
              className: "location-search-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default Autocompletado;
