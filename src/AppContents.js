import { connect } from "react-redux"
import SearchBar from './SearchBar'
import Card from "./Card"

const mapStateToProps = (state) => ({ quotes: state.quotes.quotes })

function AppContents({ dispatch, quotes }) {
  if (!quotes.length) {
    return null
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
    </>
  )
}

export default connect(mapStateToProps, null)(AppContents)