import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { CartContext } from "../../context/CartContext/index";
import CartItem from "../../components/Cart/CartItems/index";
import { Link } from "react-router-dom";

const Cart = () => {
    const test = useContext(CartContext);
    const cartElements = test.cartList.map((item) => {
        return (
            <CartItem
                key={item.id}
                item={item}
                removeItem={test.removeItem}
                addOneMore={test.addOneMore}
                restOne={test.restOne}
                total={test.TotalPrice}
            />
        );
    });

    return (
        <div className="cart">
            <h1 className="cartTitle">Cart!</h1>
            <div>
                {test.cartList.length != 0 ? (
                    <div className="cartContainer">
                        <div className="cartTitles">
                            <h5>Product</h5>
                            <h5>Quantity</h5>
                            <h5>Price</h5>
                        </div>
                        <hr className="cartLines" />
                        <div className="cartProductsContainer">
                            {cartElements}
                        </div>
                        <hr className="cartLines" />
                        <div className="cartButtonsSection">
                            <div>
                                <button
                                    className="cartButton"
                                    onClick={test.clearCart}
                                >
                                    Clear
                                </button>
                            </div>
                            <div>
                                <button className="cartButton"> Buy</button>
                                <span className="cartTotal">
                                    Total: ${test.TotalPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="cartContainer">
                        <div className="cartTitles">
                            <h5>Product</h5>
                            <h5>Quantity</h5>
                            <h5>Price</h5>
                        </div>
                        <hr className="cartLines" />
                        <div className="emptyCartContainer">
                            <h1 className="emptyCart">Your Cart is empty!</h1>
                            <Link to="/store">
                                <button className="cartButton">
                                    Let's buy!
                                </button>
                            </Link>
                        </div>
                        <hr className="cartLines" />
                        <div className="cartButtonsSection">
                            <div>
                                <button className="cartButton">Clear</button>
                            </div>
                            <div>
                                <button className="cartButton"> Buy</button>
                                <span className="cartTotal">
                                    Total: ${test.TotalPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
