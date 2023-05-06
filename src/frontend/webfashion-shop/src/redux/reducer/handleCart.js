const cart = [];

const handleCart =(state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if Product is Already Exist
            const exist = state.find((x)=> x.product_id === product.product_id);
            if(exist){
                // Increase the Quantity
                return state.map((x)=>
                x.product_id === product.product_id ? {...x, qty: x.qty + 1} : x
                );
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            
            break;

            case "DELITEM":
                const exist1 = state.find((x)=> x.product_id === product.product_id);
                if(exist1.qty === 1){
                    return state.filter((x)=> x.product_id !== exist1.product_id);
                }else{
                    return state.map((x)=>
                        x.product_id === product.product_id ? {...x, qty: x.qty-1} : x
                    );
                }
                break;
    
        default:
            return state;
            break;
    }

}

export default handleCart;