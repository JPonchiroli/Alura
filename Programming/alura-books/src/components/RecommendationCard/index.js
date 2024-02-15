import styled from "styled-components"
import { Title } from "../Titlte"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    margin-top: 30px;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`
const Caption = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`
const Description = styled.p`
    max-width: 300px;
`
const BookImage = styled.img`
    width: 150px;
`
const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

function RecommendationCard({ title, caption, description, img }) {
    return (
        <Card>
            <div>
                <Title fontSize='24px' color='#EB9B00' align='left'>{title}</Title>
                <Caption>{caption}</Caption>
                <Description>{description}</Description>
            </div>
            <div>
                <BookImage src={img} alt="Recommended Book" />
                <Button>Learn More</Button>
            </div>
        </Card>
    )
}

export default RecommendationCard