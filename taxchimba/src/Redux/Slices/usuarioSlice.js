import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuario: null,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUsuario: (state, action) => {
            state.usuario = action.payload;
        },
        setNull: (state) => {
            state.usuario = null;
        },
    }
})

export const {setUsuario, setNull} = userSlice.actions
//Seleccionadores para obtener informacion
export const selectUser = (state) => state.user.usuario;

export default userSlice.reducer;