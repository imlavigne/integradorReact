import { createSlice } from "@reduxjs/toolkit";
import { MarcasData } from "../../data/MarcasData";

const initialState ={
    marcas:MarcasData
}
export const marcasSlice = createSlice({
    name: 'marcas',
    initialState,
    reducers:{

        getMarcas: state=> state
    }
})

export const {getMarcas}=marcasSlice.actions

export default marcasSlice.reducer