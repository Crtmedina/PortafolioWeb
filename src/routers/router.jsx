import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuPrincipal } from "../pages/MenuPrincipal";
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { Tecnologias } from "../components/sections/Tecnologias";
import { Proyectos } from "../components/sections/Proyectos";
import { Contacto } from "../components/sections/Contacto";




export const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
  </BrowserRouter>
  );
};