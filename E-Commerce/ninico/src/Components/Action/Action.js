export const AddCart = (item) => {
    return{
        type : "ADD_TO_CART",
        payload : item
    }
}
export const AddList = (item) => {
    return{
        type : "ADD_TO_WISHLIST",
        payload : item
    }
}

export const RemoveItem = (id) => {
    return{
        type : "REMOVE_TO_CART",
        payload : id
    }
}

export const RemoveList = (id) => {
    return{
        type : "REMOVE_TO_WISHLIST",
        payload : id
    }
}

export const incr_Qty = (item) => {
    return{
        type : "INC_COUNT",
        payload : item
    }
}

export const dec_Qty = (item) => {
    return{
        type : "DEC_COUNT",
        payload : item
    }
}
