import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => setItem(json));
    }, [id]);

    return (
        <div className="itemDetailContainer">
            <ItemDetail
                item={item}
                id={item.id}
                title={item.title}
                img={item.image}
                desc={item.description}
                price={item.price}
            />

            <ToastContainer
                position="top-right"
                autoClose={3100}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ItemDetailContainer;
