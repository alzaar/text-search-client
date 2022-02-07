import { gql } from '@apollo/client'

export const GET_QUOTES_QUERY = gql`
query GetQuotes {
  getQuotes(page: "0") {
    total,
    data {
      id
      author
      content
      reference
      book_title
      link
      book_title
    }
  }
}
`

export const SAVE_QUOTE = gql`
 mutation saveQuote($body: QuoteBody!) {
  saveQuote(body: $body) {
    status
    message
    error
  }
}
`
export const GET_FILTERED_QUOTES = gql`
  query getFilteredQuotes($book_title: String!) {
    getFilteredQuotes(book_title: $book_title page: "0") {
      total
      data {
        id
        author
        content
        reference
        book_title
        link
      }
    }
  }
`
