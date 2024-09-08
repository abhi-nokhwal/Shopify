import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componets/Home";
import ProductList from "./Componets/ProductList";
import AboutUs from "./Componets/AboutUs";
import Head from "./Componets/Head";
import Footer from "./Componets/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Store" element={<ProductList />}></Route>
          <Route path="/About" element={<AboutUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
