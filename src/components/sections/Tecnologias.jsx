import styled from "styled-components";
import reactLogo from "../../assets/tecnologias/reactt.png";
import html from "../../assets/tecnologias/html.png";
import css from "../../assets/tecnologias/css.png";
import express from "../../assets/tecnologias/express.png";
import git from "../../assets/tecnologias/git.png";
import js from "../../assets/tecnologias/js.png";
import mongodb from "../../assets/tecnologias/mongodb.png";
import node from "../../assets/tecnologias/node.png";
import redux from "../../assets/tecnologias/redux.png";
// Importa otras imágenes según sea necesario

const tecnologiasData = [
  { id: 1, nombre: "React", imagen: reactLogo },
  { id: 2, nombre: "HTML", imagen: html },
  { id: 3, nombre: "CSS", imagen: css },
  { id: 4, nombre: "Express", imagen: express },
  { id: 5, nombre: "Git", imagen: git },
  { id: 6, nombre: "JavaScript", imagen: js },
  { id: 7, nombre: "MongoDB", imagen: mongodb },
  { id: 8, nombre: "Node", imagen: node },
  { id: 9, nombre: "Redux", imagen: redux },

  // Agrega más tecnologías según sea necesario
];

export const Tecnologias = () => {
  return (
    <TecnologiasContainer id="tecnologias">
      <Title>Tecnologias</Title>
      <TecnologiasList>
        {tecnologiasData.map((tecnologia) => (
          <TecnologiaItem key={tecnologia.id}>
            <Imagen src={tecnologia.imagen} alt={tecnologia.nombre} />
            <Nombre>{tecnologia.nombre}</Nombre>
          </TecnologiaItem>
        ))}
      </TecnologiasList>
    </TecnologiasContainer>
  );
};

const TecnologiasContainer = styled.section`
  padding: 10px 6rem; 
  font-family: 'Roboto Slab', serif;
  background-color: #3C355C;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  padding-top: 2rem;
`;

const TecnologiasList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const TecnologiaItem = styled.li`
  text-align: center;
  padding: 1rem;
`;

const Imagen = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Nombre = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`;