import { createContext, useState } from "react";
import { products } from "../assets/Products";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    // Cart State
    const [cartItems, setCartItems] = useState({});

    // Add to Cart
    const addToCart = (itemId) => {

        let cartData = { ...cartItems };

        if (cartData[itemId]) {
            cartData[itemId] = cartData[itemId] + 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
    };

    // Remove from Cart
    const removeFromCart = (itemId) => {

        let cartData = { ...cartItems };

        if (!cartData[itemId]) return;

        if (cartData[itemId] === 1) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = cartData[itemId] - 1;
        }

        setCartItems(cartData);
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;