import React, { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {

    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ... state, // esto lo utilizamos para mantener la informacion previa y no borrarla
            cart:[ ... state.cart, payload]
        });
    };
    
    return {
        state,
        addToCart
    }
}


export default useInitialState;
