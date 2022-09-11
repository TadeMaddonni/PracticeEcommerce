import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Store from "./pages/Store";
import Footer from "./components/common/Footer";
import ItemDetailContainer from "./components/Store/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" />
                    <Route path="/contact" />
                    <Route
                        path="/detail/:id"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    );
};

export default App;
