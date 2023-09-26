import { createSlice } from "@reduxjs/toolkit";
import { MarcasData } from "../../data/MarcasData";

const initialState ={
    marcas:MarcasData,
    selectedMarcas:null,
}
export const marcasSlice = createSlice({
    name: 'marcas',
    initialState,
    reducers:{

        getMarcas: state=> state,
        selecteMarcas:(state,action)=>{
            return {
                ...state ,
                selectedMarcas : action.payload !== state.selectedMarcas ? action.payload :null
            };
        }
    }
})

export const {getMarcas,selecteMarcas}=marcasSlice.actions

export default marcasSlice.reducer