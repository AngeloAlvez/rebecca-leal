import styled from 'styled-components'
import creativeDesign from '../assets/thumb-creative-design.png'

const ProjectItem = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    cursor: pointer;
    text-decoration: none;
 `
const ProjectName = styled.div`
    display: flex;
    align-items:center;
    font-family: 'Merriweather', serif;
    color: #664003;
    font-weight: bold;
    font-size: 18px;
    margin:15px;
    `

 const Card = styled.div`
    border: none;
    width: 808px;
    height: 632px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    @media (max-width: 1024px) {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
  }

 `
const ProjectNameWrapper = styled.div`
    font-weight: 200;
  
`
const Image = styled.img`
    width: 100%;
    &:hover {
    opacity: 0.7;
  }
`
const cards = [
    {
        image: creativeDesign,
        name: 'Creative Design',
        link: 'https://www.behance.net/gallery/170867255/CreativeDesign',
    },

]
const listaDeCards = cards.map((item, index)=>{
    return(
        <ProjectItem href={item.link}>
                <ProjectName>{item.name}<ProjectNameWrapper></ProjectNameWrapper></ProjectName>
                <Card>
                    <Image src={item.image} />
                </Card>     
        </ProjectItem>
    )
})


export const Cards = () => {
  
    return listaDeCards
    
}