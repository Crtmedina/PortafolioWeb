import { About } from "../components/sections/About";
import { Contacto } from "../components/sections/Contacto";
import { Home } from "../components/sections/Home";
import { MenuNavegacion } from "../components/sections/MenuNavegacion";
import { Proyectos } from "../components/sections/Proyectos";
import { Tecnologias } from "../components/sections/Tecnologias";



export const MenuPrincipal = () => {
  return (
    <div>
          <MenuNavegacion />
          <Home />
          <About />
          <Tecnologias />
          <Proyectos />
          <Contacto />
    </div>
  );
};


