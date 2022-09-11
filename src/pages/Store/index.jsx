import React, { useEffect, useState } from "react";
import ItemListContainer from "../../components/Store/ItemListContainer";
import "./styles.css";

const Store = () => {
    const [items, setItems] = useState([]);
    const getProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setItems(json));
    };
    useEffect(getProducts, []);
    return (
        <div className="storeContainer">
            <ItemListContainer items={items} />
        </div>
    );
};

export default Store;
