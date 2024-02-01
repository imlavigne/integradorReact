import { addItemToCarro, removeItemToCarro, compraConfirmada } from "./carroUtilis";

const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    carroItems: [],
    hidden: true
}

const carroSlice = createSlice({
    name: "carro",
    initialState,
    reducers: {
        addToCarro: (state, action) => {
            return {
                ...state,
                carroItems: addItemToCarro(state.carroItems, action.payload)
            }
        },
        removeToCarro: (state, action) => {
            return {
                ...state,
                carroItems: removeItemToCarro(state.carroItems, action.payload)
            }

        },
        clearCarro: (state) => {
            return {
                ...state,
                carroItems: [],
            }
        },

        toggleHiddenCarro: (state) => {
            return {
                ...state,
                hidden: !state.hidden
            }
        },
        confirmarCompra: (state) => {
            return {
                ...state,
                comprar: compraConfirmada(state.carroItemss)
            }
    }
}
})


export const { addToCarro, clearCarro, toggleHiddenCarro, removeToCarro ,confirmarCompra} = carroSlice.actions;
export default carroSlice.reducer