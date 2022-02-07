import { connect } from 'react-redux'
import { gql, useApolloClient } from '@apollo/client'
import Card from './Card'
import Button from './Button'
import SearchBar from './SearchBar'
import { GET_QUOTES, UPDATE_PAGE, EMPTY_RESULT } from './constants'

const mapStateToProps = (state) => ({
  quotes: state.quotes.quotes,
  filter: state.quotesType.filter,
  page: state.quotesType.page,
  value: state.quotesType.value,
  emptyResult: state.quotes.emptyResult
})

function AppContents({ dispatch, quotes, filter, page, value, emptyResult }) {
  const client = useApolloClient()
  const loadMore = (e) => {
    e.preventDefault()
    const newPage = parseInt(page) + 1
    const query = `
      query getFilteredQuotes {
        getFilteredQuotes(${filter}: "${value}" page: "${newPage}") {
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
    client.query({ query: gql(query) })
    .then(res => {
      const { data } = res
      if (data && data.getFilteredQuotes.data.length) {
        dispatch({ type: GET_QUOTES, payload: [...quotes, ...data.getFilteredQuotes.data] })
        dispatch({ type: UPDATE_PAGE, payload: newPage.toString() })
      } else {
        dispatch({ type: EMPTY_RESULT, payload: true })
      }
    })
    .catch(err => console.error(err))
  }
  const cards = quotes.map((data, i) => <Card key={i} data={data} />)
  
  return (
    <>
      <SearchBar />
      <div style={{
        fontSize: '30px',
        margin: 'auto',
        width: '50%',
        marginBottom: '14px',
        fontWeight: 'bold'
      }}>Quotes</div>
      {cards}
      {(!emptyResult && quotes.length) ?
      <Button
        onClick={loadMore}
        style={{
          width: '10%',
          fontSize: '12px',
          padding: '5px',
          cursor: 'pointer',
          margin: 'auto',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#ffffff',
        }}
      >Load More</Button>
      : ''
      }
    </>
  )
}

export default connect(mapStateToProps, null)(AppContents)