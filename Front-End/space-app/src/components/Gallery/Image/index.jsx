import ButtonFavorite from '/icons/favorito.png'
import ButtonExpand from '/icons/expandir.png'
import styled from 'styled-components'
import IconButton from '../../IconButton'

const Figure = styled.figure`
    width: ${(props) => (props.$expand ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Image({picture, expand = false, onZoom}){
  return(
    <Figure $expand={expand}>
      <img src={picture.path} alt={picture.path} />
      <figcaption>
        <h3>{picture.titulo}</h3>
        <StyledFooter>
          <h4>{picture.fonte}</h4>
          <IconButton>
            <img src={ButtonFavorite} alt="Button Favorite" />
          </IconButton>
          <IconButton>
            <img src={ButtonExpand} alt="Button Expand" onClick={() => onZoom(picture)} />
          </IconButton>
        </StyledFooter>
      </figcaption>
    </Figure>
  )
}