import styled from "styled-components";
import gmail from "../../assets/redes/correo.png";
import github from "../../assets/redes/github.png";
import linkedin from "../../assets/redes/linkedin.png";
import whatsapp  from "../../assets/redes/whatsapp.png";


const contactosData = [
    { id: 1, nombre: "Gmail", imagen: gmail },
    { id: 2, nombre: "Github", imagen: github },
    { id: 3, nombre: "linkedin", imagen: linkedin },
    { id: 4, nombre: "whatsapp", imagen: whatsapp },

   
    // Agrega más tecnologías según sea necesario
];

const getEnlaceRedSocial = (nombre) => {
    // Agrega lógica para obtener el enlace correspondiente a la red social
    switch (nombre.toLowerCase()) {
      case "gmail":
        return "mailto:cristobal.medina.1997@@gmail.com"; // Reemplaza 'tuemail@gmail.com' con tu dirección de correo
      case "github":
        return "https://github.com/Crtmedina?tab=repositories"; // Reemplaza 'tuusuario' con tu nombre de usuario de GitHub
      case "linkedin":
        return "https://www.linkedin.com/in/cristobal-eduardo-medina-diaz-87299b26a/"; // Reemplaza 'tuperfil' con tu nombre de usuario de LinkedIn
      case "whatsapp":
        return "https://wa.me/+56982341448"; // Reemplaza 'tunumerodetelefono' con tu número de teléfono (incluyendo código de país)
      default:
        return "#";
    }
  };

export const Contacto = () => {
  return (
    <ContactoContainer id="contacto">
      <Title>Puedes contactarme en: </Title>
      <ContactoList>
        {contactosData.map((contacto) => (
          <ContactoItem key={contacto.id}>
            <EnlaceRedSocial href={getEnlaceRedSocial(contacto.nombre)}>
              <Imagen src={contacto.imagen} alt={contacto.nombre} />
            </EnlaceRedSocial>
          </ContactoItem>
        ))}
      </ContactoList>
    </ContactoContainer>
  );
};

const ContactoContainer = styled.section`
  padding: 10px 6rem; 
  font-family: 'Roboto Slab', serif;
  background-color: white;
  color: black;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  padding-top: 2rem;
`;

const ContactoList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center; /* Centrar los elementos en la pantalla */
  gap: 20px;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const ContactoItem = styled.li`
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 10px; /* Añade un margen inferior para separar los elementos */
`

const Imagen = styled.img`
  width: 40px; /* Ajusta el tamaño según tus necesidades */
  height: 40px; /* Ajusta el tamaño según tus necesidades */

`;

const EnlaceRedSocial = styled.a`
  text-decoration: none;
  color: inherit;
`;