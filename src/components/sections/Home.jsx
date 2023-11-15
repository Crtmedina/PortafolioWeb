import styled from "styled-components";
import comp from "../../assets/compp.jpg";

export const Home = () => {
  return (
        <HomeContainer id="home">

          <ImagenContainer>
              <Imagen src={comp} alt="" />
          </ImagenContainer>

          <Titles>
            <Title>Cristobal Medina</Title>
            <Title2>Frontend Developer</Title2>
          </Titles>
          
          
        </HomeContainer>
  );
};


const HomeContainer = styled.section`
  // Estilos de los elementos del menú
    padding: 10px 6rem;
    font-family: 'Roboto Slab', serif;
    background-color: #3C355C;
`;

const Titles = styled.div`
    text-align: center;
    padding-bottom: 3rem;
`;

const Title = styled.h1`
  // Estilos de los elementos del menú
  font-size: 4rem;
  color: white;

`;

const Title2 = styled.h2`
  // Estilos de los elementos del menú
  color: white
`;

const ImagenContainer = styled.div`
  // Estilos de los elementos del menú
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
`;

const Imagen = styled.img`
  // Estilos de los elementos del menú
  border-radius: 50%; /* Esto hará que la imagen tenga forma circular */
  width: 200px; /* Ajusta según sea necesario */
  height: 200px; /* Ajusta según sea necesario */
`;



