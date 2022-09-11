import React from "react";
import Item from "./Item";
import "./styles.css";

const ItemList = (props) => {
    const itemElements = props.items.map((item) => {
        return (
            <Item
                key={item.id}
                title={item.title}
                id={item.id}
                img={item.image}
                desc={item.description}
                price={item.price}
                rating={item.rating.rate}
            />
        );
    });

    return (
        <div className="itemList">
            <h2 className="heroTitle storeTitle">Store!</h2>
            {props.items ? itemElements : <p>Cargando</p>}
        </div>
    );
};

export default ItemList;
