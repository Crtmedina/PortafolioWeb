import styled from "styled-components";
import nftpage from "../../assets/proyectos/nft.png";
import calendar from "../../assets/proyectos/calendarr.png";
import peliculas from "../../assets/proyectos/peliculas.png"
import devjobs from "../../assets/proyectos/devjobs.png"
import pokedex from "../../assets/proyectos/pokedex.png"
import teslo from "../../assets/proyectos/teslo.png"


const proyectosData = [
  {
    id: 1,
    nombre: "Calendar Mern",
    descripcion: "Este proyecto se centra en el desarrollo de un sistema de calendario implementado utilizando el stack MERN (MongoDB, Express.js, React y Node.js) con la adición de la gestión de estado a través de Redux. La aplicación permite a los usuarios gestionar eventos, incluyendo funciones como la creación, visualización, edición y eliminación de eventos en un entorno interactivo y amigable.",
    imagen: calendar,
    enlace: "https://calendar-mern-md-0cd9f43879e8.herokuapp.com/auth/login",
  },
  {
    id: 2,
    nombre: "Peliculas",
    descripcion: "La aplicación tiene como objetivo mostrar información detallada sobre películas, incluyendo detalles como el título, género y descripción. Se emplearon tecnolgoias como react, react router, Styled-components, fetch API para hacer solicitudes y la API The Movie Database",
    imagen: peliculas,
    enlace: "https://react-peliculass.netlify.app/",
  },
  {
    id: 3,
    nombre: "TesloShop",
    descripcion: "Una replica del sitio web tesla que consite en un ecommerce, una plataforma de compras en línea diseñada para ofrecer una experiencia fluida y segura tanto para los usuarios normales como para los administradores creada con tecnologias tales como React, Nextjs, Typescript, Zustand, Prisma, nextAuth, ReactHookForm, Cloudinary y Paypal React. Los usuarios de rol user tienen funcionalidades tales como: autenticación y registro de usuarios, visualización de productos y filtrado, carrito de compras, checkout con paypal, confirmación de orden, visualización de historial de compras. Los usuarios de roi admin en cambio tienen las mismas funcionaliades a excepcion de gestionar los productos como crear, editar eliminar y visualizar las ordenes de todos los usuarios.",
    
    imagen: teslo,
    enlace: "https://crtmedina-tesloshop.vercel.app/",
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