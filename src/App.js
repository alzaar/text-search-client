import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import AppContents from './AppContents'
import QuotesForm from './QuotesForm'
import './App.css'

function App({ dispatch }) {
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