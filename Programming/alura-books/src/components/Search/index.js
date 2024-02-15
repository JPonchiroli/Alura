import Input from '../Input'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getBooks } from '../../services/books'
import { postFavorite } from '../../services/favorites'

const SearchContainer = styled.section`
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 450px;
        width: 100%;
    `
const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
    `
const Caption = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
    `
const BooksContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `
const BookItem = styled.div`
        padding: 10px;
        margin: 10px;
        max-width: 200px;
        text-align: center;
    `
const BookImage = styled.img`
        width: 150px;
        height: 200px;
    `
const BookTitle = styled.p`
        font-size: 16px;
        margin-bottom: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
    `

function Search() {

    const [booksSearched, setBooksSearched] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const booksAPI = await getBooks()
        setBooks(booksAPI)
    }

    async function insertFavorite(id){
        await postFavorite(id)
        alert(`Book: ${id} insered`)
    }

    return (
        <SearchContainer>
            <Title>Do you already know where to start?</Title>
            <Caption>Find your book in our bookcase</Caption>
            <Input
                placeholder="Write your next reading"
                onBlur={event => {
                    const textTyped = event.target.value.toLowerCase();
                    const resultSearch = books.filter(book => book.name.toLowerCase().includes(textTyped))
                    setBooksSearched(resultSearch)
                }}
            />
            <BooksContainer>
                {booksSearched.map(book => (
                    <BookItem onClick={() => insertFavorite(book.id)}>
                        <BookTitle>{book.name}</BookTitle>
                        <BookImage src={book.src} alt='Book Searched' />
                    </BookItem>
                ))}
            </BooksContainer>
        </SearchContainer>
    )
}

export default Search