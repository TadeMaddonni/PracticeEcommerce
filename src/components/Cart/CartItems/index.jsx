import React from "react";
import "./styles.css";
import RemoveIcon from "../CartRemoveIcon";
import AddOneMore from "../CartAddOneMoreBtn";
import RestOne from "../CartRestOneBtn";

const CartItem = ({ item, removeItem, addOneMore, restOne }) => {
    const itemTitle = item.title.split(" ").slice(0, 4).join(" ");
    return (
        <div className="cartItem">
            <div className="productContainer">
                <img className="cartImg" src={item.image} alt="" />
                <h2>{itemTitle}</h2>
            </div>
            <div className="quantityContainer">
                <button
                    className="cartQuantityBtn"
                    onClick={() => {
                        addOneMore(item.id);
                    }}
                >
                    <AddOneMore />
                </button>
                <span className="cartItemquantity">{item.quantity}</span>
                <button
                    className="cartQuantityBtn"
                    onClick={() => {
                        restOne(item.id, item.quantity);
                    }}
                >
                    <RestOne />
                </button>
            </div>
            <div className="priceContainer">
                <span className="cartItemPrice">
                    ${Math.round(item.price * item.quantity)}
                </span>
            </div>
            <div className="deleteContainer">
                <RemoveIcon
                    removeItem={() => {
                        removeItem(item.id);
                    }}
                />
            </div>
        </div>
    );
};
export default CartItem;
