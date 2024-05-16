const initial_state = {
    carts : [],
    wishlist : []
}

export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return{
                ...state,
                carts : [...state.carts, action.payload]
            }
        case "REMOVE_TO_CART":
            const data = state.carts.filter((e) => e.id !== action.payload)
            return{
                ...state,
                carts : data,
            }
        case "INC_COUNT":
            {
                let newList = state.carts.map((item)=>{
                    if(item.id == action.payload.id){
                        return{
                            ...item,
                            qty : item.qty + 1
                        }           
                    }
                    return item
                })
                console.log("list",newList);
                return {...state,carts : newList}
            }
        case "DEC_COUNT":
            {
                let newList = state.carts.map((item)=>{
                    if(item.id == action.payload.id){
                        return{
                            ...item,
                            qty : item.qty - 1
                        }           
                    }
                    return item
                })
                console.log("list",newList);
                return {...state,carts : newList}
            }
        default :
        return state;
    }
}
export const WishList = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                wishlist : [...state.wishlist, action.payload]
            }
        case "REMOVE_TO_WISHLIST":
            const data = state.wishlist.filter((e) => e.id !== action.payload)
            return{
                ...state,
                wishlist : data,
            }
            case "INC_COUNT":
                {
                    let newList = state.wishlist.map((item)=>{
                        if(item.id == action.payload.id){
                            return{
                                ...item,
                                qty : item.qty + 1
                            }           
                        }
                        return item
                    })
                    console.log("list",newList);
                    return {...state,wishlist : newList}
                }
            case "DEC_COUNT":
                {
                    let newList = state.wishlist.map((item)=>{
                        if(item.id == action.payload.id){
                            return{
                                ...item,
                                qty : item.qty - 1
                            }           
                        }
                        return item
                    })
                    console.log("list",newList);
                    return {...state,wishlist : newList}
                }
        default :
        return state;
    }
}
