import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    return (
        <div>
            <ItemList items={props.items} />
        </div>
    );
};

export default ItemListContainer;