import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useQuery } from '@apollo/client'
import { Route, Routes } from 'react-router-dom'
import { GET_QUOTES_QUERY } from './quotesQueries'
import { GET_QUOTES } from './constants'

import AppContents from './AppContents'
import QuotesForm from './QuotesForm'
import './App.css'

function App({ dispatch }) {
  const { data } = useQuery(GET_QUOTES_QUERY)
  useEffect(() => {
    if (data && data.getQuotes.total) {
      dispatch({ type: GET_QUOTES, payload: data.getQuotes.data })
    }
  }, [data, dispatch])
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<AppContents />} />
        <Route exact path="/add" element={<QuotesForm />} />
      </Routes>
    </div>
  );
}

export default connect()(App)