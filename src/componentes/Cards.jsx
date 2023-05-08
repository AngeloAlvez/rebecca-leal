import styled from 'styled-components'
import construction from '../assets/manutencao.png'
const ProjectItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 50px;
 `
const ProjectName = styled.div`
    display: flex;
    align-items:center;
    font-family: 'Merriweather', serif;
    color: #664003;
    font-weight: bold;
    font-size: 18px;
    `

 const Card = styled.div`
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
 width: 300px;
 height: 300px;
 background-color: #eee9e6;
 overflow: hidden;
 `
const ProjectNameWrapper = styled.div`
    font-weight: 200;
  
`
const Image = styled.img`
height: 120%;
opacity: 0.1;
`
const cards = [
    {
        image: construction,
        name: 'Projeto 01',
        linkFigma: 'link do primeiro figma',
        linkNet: 'link do primeiro rodando'
    },
    {
        image: construction,
        name: 'Projeto 01',
        linkFigma: 'link do primeiro figma',
        linkNet: 'link do primeiro rodando'
    },
    {
        image: construction,
        name: 'Projeto 01',
        linkFigma: 'link do primeiro figma',
        linkNet: 'link do primeiro rodando'
    },
]
const listaDeCards = cards.map((card, index)=>{
    return(
        <ProjectItem>
            <ProjectName>{card.name}<ProjectNameWrapper>(em construção)</ProjectNameWrapper></ProjectName>
            <Card>
         <Image src={card.image} />
            </Card>
            

        </ProjectItem>
    )
})


export const Cards = () => {
  
    return listaDeCards
    
}