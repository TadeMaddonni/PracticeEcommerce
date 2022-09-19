import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartList));
    }, [cartList]);

    const isOnCart = (itemId) => {
        const item = cartList.find((el) => el.id === itemId);
        return item ? true : false;
    };

    const addItem = (item, qty) => {
        if (isOnCart(item.id)) {
            setCartList((prevState) => {
                return prevState.map((el) => {
                    if (el.id === item.id) {
                        return {
                            ...el,
                            quantity: el.quantity + qty,
                        };
                    } else {
                        return el;
                    }
                });
            });
            toast.success("Product added successfully", {
                position: "top-right",
                autoClose: 11,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            let itemForCart = {
                ...item,
                quantity: qty,
            };
            setCartList((prevState) => [...prevState, itemForCart]);
            toast.success("Product added successfully", {
                position: "top-right",
                autoClose: 3100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const addOneMore = (itemId) => {
        setCartList((prevState) => {
            return prevState.map((el) => {
                return el.id === itemId
                    ?   {
                            ...el,
                            quantity: el.quantity + 1,
                        }
                    : el;
            });
        });
    };

    const restOne = (itemId, qty) => {
        if (qty === 1) {
            removeItem(itemId);
        } else {
            setCartList((prevState) => {
                return prevState.map((el) => {
                    if (el.id === itemId) {
                        return {
                            ...el,
                            quantity: el.quantity - 1,
                        };
                    } else {
                        return el;
                    }
                });
            });
        }
    };

    const removeItem = (itemId) => {
        let newCartList = cartList.filter((item) => item.id !== itemId);
        setCartList(newCartList);
    };

    const clearCart = () => {
        setCartList([]);
    };

    const totalPrice = () => {
        return Math.round(
            cartList.reduce(
                (totalPrice, item) => totalPrice + item.price * item.quantity,
                0
            )
        );
    };

    const TotalPrice = totalPrice();

    const totalItems = () => {
        return cartList.reduce((totalItems, currentItem) => totalItems + currentItem.quantity, 0);
    }

    const TotalItems = totalItems(); 

    return (
        <CartContext.Provider
            value={{
                cartList,
                addItem,
                removeItem,
                clearCart,
                addOneMore,
                restOne,
                TotalPrice,
                TotalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
