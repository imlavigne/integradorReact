import { createSlice } from "@reduxjs/toolkit";
import { ProductsData, TotalProducts } from "../../data/ProductsData";


const initialState={
    products:ProductsData,
    totalProducts : TotalProducts
}

export const productsSlice= createSlice({
    name:"products",
    initialState ,  
    reducers:{
        getproducts:state=>state
    }
})

export const {getproducts}=productsSlice.actions

export default productsSlice.reducer