
 

export const addItemToCarro = (carroItems, product) => {
    const productsInCarro = carroItems.find(item => item.id === product.id)
    if (productsInCarro) {
        return carroItems.map(item => item.id === productsInCarro.id ?
            {
                ...item, cantidad: item.cantidad + 1
            } : item)
    }

    return [...carroItems,{...product,cantidad:1}]
}


export const removeItemToCarro =(carroItems,id)=>{
    const productToremove= carroItems.find(item=>item.id===id)

    if(productToremove.cantidad>1){
        return carroItems.map(item => item.id === productToremove.id ?
            {
                ...item, cantidad: item.cantidad - 1
            } : item)
    }
    return carroItems.filter(item=>item.id!==productToremove.id)
}

export const compraConfirmada =(carroItems)=>{
    
    console.log("carrito")
}


// export resetCarro=(carroItems)=>{
//     return 

// }