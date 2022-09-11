import React from "react";
import "./styles.css";
import { CartContext } from "../../../../context/CartContext";
import { useContext } from "react";


const ItemDetail = (props) => {
    const cart = useContext(CartContext);

    return (
        <div className="itemDetailCard">
            <div>
                <img src={props.img} alt="" />
            </div>
            <div className="itemDetailInfo">
                <h5 className="itemDetailName">{props.title}</h5>
                <p className="itemDetailDesc">{props.desc}</p>
                <span className="itemDetailPrice">${props.price}</span>

                <button className="btnDetailComprar" onClick={() => {cart.addItem(props.item, 1)}}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;
