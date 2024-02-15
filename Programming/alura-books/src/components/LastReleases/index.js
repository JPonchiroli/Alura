import { books } from './dataLastReleases'
import { Title } from '../Titlte'
import RecommendationCard from '../RecommendationCard'
import book7 from '../../images/book7.png'
import book8 from '../../images/book8.png'
import styled from 'styled-components'

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const BookImagem = styled.img`
    width: 300px;
    height: 400px;
    margin-right: 30px
`

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title
                color='#EB9000'
                fontSize='36px'
            >
                Last Releases
            </Title>
            <NewBooksContainer>
                {books.map(book => (
                    <BookImagem src={book.src} alt='Books Lasts Released' />
                ))}
            </NewBooksContainer>
            <RecommendationCard 
                title='Maybe you interest for...'
                caption='Web Development'
                description='Improving you abilities in web development!'
                img={book7}
            />
            <RecommendationCard 
                title='Maybe you interest for...'
                caption='Back End Development'
                description='Improving you abilities in back end development!'
                img={book8}
            />
        </LastReleasesContainer>
    )
}

export default LastReleases