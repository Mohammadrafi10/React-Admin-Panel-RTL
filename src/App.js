import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import "./App.css";
import Products from "./components/products/products";
import Login from "./components/login/login";
import Profile from "./components/profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
