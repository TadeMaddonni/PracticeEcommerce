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
import Contact from "./pages/Contact";
import Aboutus from "./pages/About";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<Aboutus />} />
                    <Route path="/contact" element={<Contact />}/>
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
