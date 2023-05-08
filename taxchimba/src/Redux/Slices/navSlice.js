import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origen: null,
    destino: null,
    tiempoViaje: null
}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers: {
        setOrigen: (state, action) => {
            state.origen = action.payload;
        },
        setDestino: (state, action) => {
            state.destino = action.payload;
        },
        setTiempoViaje: (state, action) => {
            state.tiempoViaje = action.payload;
        }
    }
})

export const {setOrigen, setDestino, settiempoViaje} = navSlice.actions

//Seleccionadores para obtener informacion
export const selectOrigen = (state) => state.nav.origen;
export const selectDestino = (state) => state.nav.destino;
export const selectTiempoViaje = (state) => state.nav.tiempoViaje;

export default navSlice.reducer;