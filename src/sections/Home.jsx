import styled from 'styled-components'
import imagemPerfil from '../assets/rebecca-perfil.png'
import { AiOutlineMail } from 'react-icons/ai';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { FaBehance } from 'react-icons/fa';

const MainSection = styled.section`
display:flex;
flex-direction: column;
align-items: center;
font-family: 'Merriweather', serif;
color: #664003;
gap: 10px;
`
const ImgWrapper = styled.div`
width: 250px;
height: 250px;
border-radius: 80%;
overflow: hidden;
@media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`
const Img = styled.img`
width: 250px;
@media (max-width: 768px) {
    width: 180px;
  }

`

const Titulo = styled.h2`
font-family: 'Merriweather', serif;
font-weight: 400;
font-size: 24px;
`
const Subtitulo = styled.h2`
font-family: 'Merriweather', serif;
font-weight: lighter;
font-size: 18px;
`
const ButtonSocialMedia = styled.a`
margin:10px;
background-color: #664003;
font-family: 'Merriweather', serif;
font-weight: 200;
font-size: 18px;
color: white;
border: none;
width: 80%;
height: 50px;
border-radius: 18px;
display: flex;
align-items: center;
justify-content: space-between;
text-decoration: none;
&:hover {
    opacity: 0.8;
  }
&:active {
box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.4) inset;
}


@media (min-width: 768px) {
    width: 500px;
  }
`
const ButtonsList = styled.div`
margin: 30px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
const ButtonWrapper = styled.span`
width: 0;
height: 100%;
padding-left:25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 20px;
`
export const Home = () => {
    return(
        <MainSection>
            <ImgWrapper>
                <Img src={imagemPerfil} alt='uma mulher branca de cabelos pretos com franja'/>
            </ImgWrapper>
           
            <Titulo>Rebecca Leal</Titulo>
            <Subtitulo>UX/UI Designer</Subtitulo>
            <Subtitulo>Designer de moda</Subtitulo>
          <ButtonsList>
            <ButtonSocialMedia target='blank' href='https://www.behance.net/rebeccaleal1'><ButtonWrapper><FaBehance /></ButtonWrapper>Behance<ButtonWrapper></ButtonWrapper></ButtonSocialMedia>
            <ButtonSocialMedia target='blank' href='https://www.linkedin.com/in/rebecca-leal-814249273'><ButtonWrapper><RiLinkedinBoxLine /></ButtonWrapper>LinkedIn<ButtonWrapper></ButtonWrapper></ButtonSocialMedia>
            <ButtonSocialMedia target='blank' href='https://wa.me/5521970004273'><ButtonWrapper><BsWhatsapp /></ButtonWrapper>WhatsApp<ButtonWrapper></ButtonWrapper></ButtonSocialMedia>
            <ButtonSocialMedia target='blank' href='mailto: alealrebecca@gmail.com'><ButtonWrapper><AiOutlineMail /></ButtonWrapper>E-mail<ButtonWrapper></ButtonWrapper></ButtonSocialMedia>
          </ButtonsList>
            
      


        </MainSection>
      
    )
}