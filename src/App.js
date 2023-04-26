import Nav from "./components/Nav";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Credits from "./components/Credits";
import Home from "./components/Home";
import Category from "./components/Category";
import Recipe from "./components/Recipe";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/recipe/:recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}
