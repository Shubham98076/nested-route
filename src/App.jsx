import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Contact from "./component/Contact";
import Products from "./component/Products";
import ProductDetail from "./component/ProductDetail";
import Dashboard from "./component/Dashboard";
import Settings from "./component/Settings";
import Profile from "./component/Profile";

import "./NavLinkTest.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    image: "/image/laptop.png",
  },
  {
    id: 2,
    name: "Keyboard",
    price: 100,
    image: "/image/keyboard.png",
  },
  {
    id: 3,
    name: "Mouse",
    price: 200,
    image: "/image/mouse.png",
  },
];

const Home = () => <h2>Welcome to my Home</h2>;

function About() {
  return <h2>This is an About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/about">About</NavLink>{" "}
        <NavLink to="/contact">Contact</NavLink>{" "}
        <NavLink to="/productlist">Product List</NavLink>{" "}
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/productlist"
          element={<Products list={products} />}
        />

        <Route
          path="/productlist/:id"
          element={<ProductDetail list={products} />}
        />

        <Route path="/dashboard" element={<Dashboard />} >

        <Route path="profile" element={<Profile />} />

        <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;