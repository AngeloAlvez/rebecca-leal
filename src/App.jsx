import styled from 'styled-components'
import { useState } from 'react';
import { Home } from './sections/Home';
import { Projetos } from './sections/Projetos';
import './reset.css'
import manchinha from './assets/mancha.svg';
const Background = styled.div`
`
const ManchaSuperior = styled.img`
position: fixed;
width: 150px;
z-index: -1;
`
const ManchaInferior = styled.img`
position: fixed;
width: 150px;
right: 0;
bottom: 0;
transform: rotate(180deg);
z-index: -1;
`
const Menu = styled.nav`
display: flex;
align-items: center;
justify-content: center;
padding: 30px;
`
const MenuButton = styled.nav`
margin: 15px;
font-family: 'Merriweather', serif;
color: #664003;
font-weight: bold;
font-size: 18px;
display: flex;
align-items: center;
opacity:${(props) => (props.active ? '1': '0.5')};
text-underline-offset: 6px;
text-decoration: ${(props) => (props.active ? 'underline': 'none')};

`
function App() {
  const [isHome, setIsHome] = useState(true)
  const menuToHome = () => {
  setIsHome(true)
  }
  const menuToProjetos = () => {
    setIsHome(false)
    }

  return (
    <Background>

        <ManchaSuperior src={manchinha} />
        <ManchaInferior src={manchinha} />
     
      <Menu>
        <MenuButton active={isHome} onClick={menuToHome}>HOME</MenuButton>
        <MenuButton active={!isHome} onClick={menuToProjetos}>PORTIFÓLIO</MenuButton>
      </Menu>
      <section>
      {isHome? <Home /> : <Projetos /> }
      </section>
    </Background>
  );
}

export default App;
