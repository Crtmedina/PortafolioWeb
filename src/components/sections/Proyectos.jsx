import styled from "styled-components";
import nftpage from "../../assets/proyectos/nft.png";
import calendar from "../../assets/proyectos/calendarr.png";
import peliculas from "../../assets/proyectos/peliculas.png"
import devjobs from "../../assets/proyectos/devjobs.png"
import pokedex from "../../assets/proyectos/pokedex.png"

const proyectosData = [
  {
    id: 1,
    nombre: "NFT Page",
    descripcion: "NFT Page:  Este proyecto se centra en la creación del modelo de una página NFT, con un enfoque específico en el desarrollo del frontend utilizando React. Mi objetivo principal fue aplicar una variedad de estilos mediante Styled Components para lograr un sitio web con una interfaz más amigable y atractiva para los usuarios.",
    imagen: nftpage,
    enlace: "https://react-nftpage.netlify.app/",
  },
  {
    id: 2,
    nombre: "Calendar Mern",
    descripcion: "Este proyecto se centra en el desarrollo de un sistema de calendario implementado utilizando el stack MERN (MongoDB, Express.js, React y Node.js) con la adición de la gestión de estado a través de Redux. La aplicación permite a los usuarios gestionar eventos, incluyendo funciones como la creación, visualización, edición y eliminación de eventos en un entorno interactivo y amigable.",
    imagen: calendar,
    enlace: "https://calendar-mern-md-0cd9f43879e8.herokuapp.com/auth/login",
  },
  {
    id: 3,
    nombre: "Peliculas",
    descripcion: "La aplicación tiene como objetivo mostrar información detallada sobre películas, incluyendo detalles como el título, género y descripción. Se emplearon tecnolgoias como react, react router, Styled-components, fetch API para hacer solicitudes y la API The Movie Database",
    imagen: peliculas,
    enlace: "https://react-peliculass.netlify.app/",
  },
  {
    id: 4,
    nombre: "DevJobs",
    descripcion: "Una aplicación web que ofrece una plataforma interactiva para explorar oportunidades laborales en el campo del desarrollo. Desarrollada utilizando React y Vite. Los usuarios pueden buscar trabajos por título, empresa y ubicación, así como filtrar por tipo de contrato (tiempo completo, tiempo parcial, freelance). La navegación entre detalles de trabajos específicos se gestiona eficientemente con React Router. La aplicación también proporciona información detallada sobre los requisitos y responsabilidades asociadas a cada puesto.",
    imagen: devjobs,
    enlace: "https://react-devjobs.netlify.app/",
  },
  {
    id: 5,
    nombre: "Pokedex",
    descripcion: "Una aplicación web construida con React 18 y Vite. La aplicación proporciona una experiencia interactiva para explorar y aprender sobre los Pokémon, presentando información detallada, estadísticas y tipos. Diseñada con una interfaz de usuario receptiva y atractiva, la Pokedex utiliza las tecnologías más recientes como TypeScript, ESLint para linting, y React Hooks para gestionar el estado y el ciclo de vida del componente.",
    imagen: pokedex,
    enlace: "https://react-pokedexapii.netlify.app/",
  },
  // Puedes agregar más proyectos según sea necesario
];

export const Proyectos = () => {
  return (
    <ProyectosContainer id="proyectos">
      <Title>Mis Proyectos</Title>
      <ProyectosList>
        {proyectosData.map((proyecto) => (
          <ProyectoItem key={proyecto.id}>
            <ImagenContainer>
              <Imagen src={proyecto.imagen} alt={proyecto.nombre} />
            </ImagenContainer>
            <Title>{proyecto.nombre}</Title>
            <Descripcion>{proyecto.descripcion}</Descripcion>
            <BotonEnlace href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </BotonEnlace>
          </ProyectoItem>
        ))}
      </ProyectosList>
    </ProyectosContainer>
  );
};

const ProyectosContainer = styled.section`
  padding: 10px 6rem; 
  font-family: 'Roboto Slab', serif;
  background-color: #212121;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  padding-top: 2rem;
  color: white;
`;

const ProyectosList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProyectoItem = styled.li`
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 20px;
  background-color: #3C355C;
  border-radius: 10px; /* Añadir bordes redondeados */
  padding: 20px; /* Añadir espacio interno */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  color: white;
`;

const ImagenContainer = styled.div`
  border-radius: 8px;
  overflow: hidden; /* Evitar que la imagen sobresalga del contenedor */
  margin-bottom: 10px;
`;

const Imagen = styled.img`
  width: 100%;
  height: auto; /* Hacer que la altura sea automática para mantener la proporción */
  object-fit: cover;
`;

const Descripcion = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: left;
`;

const BotonEnlace = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #A35A50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #621896;
  }
`;