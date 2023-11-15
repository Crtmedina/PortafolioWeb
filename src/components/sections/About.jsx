import styled from "styled-components";

export const About = () => {
  return (
    <AboutContainer id="about">
      <Title>Conoce un poco más sobre mí</Title>
      <Content>
        <Paragraph>
        Soy un ingeniero en informática graduado de la Universidad de los Lagos. Al concluir mis estudios, decidí adentrarme en el mundo de la programación. Desde entonces, he estado constantemente inmerso en el aprendizaje de nuevas tecnologías, aplicándolas en diversos proyectos.
        </Paragraph>
        <Paragraph>
        A lo largo de mi trayectoria, he focalizado mi atención en el stack MERN (MongoDB, Express.js, React.js, Node.js). Sin embargo, mi apetito por el conocimiento me impulsa a explorar y profundizar aún más, especialmente en el ámbito del backend.
        </Paragraph>
        <Paragraph>
        Estoy emocionado por las oportunidades que el desarrollo de software ofrece y estoy comprometido a seguir creciendo como profesional.
        </Paragraph>
      </Content>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  padding: 10px 6rem;
  font-family: 'Roboto Slab', serif;
  background-color:#212121;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  padding-top: 2rem;
  color: white;
`;

const Content = styled.div`
  color: white;
  margin: 0 auto;
  max-width: 800px; /* Establecer un ancho máximo para el contenido */
  text-align: justify; /* Justificar el texto para un mejor aspecto */
  padding-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  line-height: 1.8; /* Ajuste para un mejor espacio entre líneas */
  margin-bottom: 20px;
`;