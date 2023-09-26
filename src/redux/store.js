import { combineReducers, configureStore } from "@reduxjs/toolkit";
import marcasreducer from "./marcas/marcasSlice";
import productsreducer from "./products/productsSlices";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
    marcas: marcasreducer,
    products:productsreducer
})

const persistConfig ={
    key:'root',
    storage:storage
}
const persistterReducer =persistReducer(persistConfig,reducers)

export const store= configureStore({
    reducer:persistterReducer
})

export const persistor = persistStore(store)