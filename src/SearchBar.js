import { useState } from 'react'
import PropTypes from 'prop-types'
import { gql } from '@apollo/client'
import { connect } from 'react-redux'
import { useApolloClient  } from '@apollo/client'

import './searchbar.css'
import { GET_QUOTES } from './constants'
import filterIcon from './assets/filter.svg'
import searchIcon from './assets/glass.svg'

function Checkbox({ label, name, handleFilterChange, checked }) {
  return (
    <label style={{
      fontSize: '10px',
    }}>
      <input type='checkbox'
        checked={checked}
        onChange={() => handleFilterChange(name)}
      />
      {label}
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
}

function SearchBar({ dispatch }) {
  const [value, setValue] = useState('')
  const [isFilter, setIsFilter] = useState(false)
  const [filter, setFilter] = useState('book_title')
  const client = useApolloClient()

  const handleOnChange = (e) => {
    setValue(e.target.value)
    if (e.keyCode === 13) {
      handleOnSubmit(e)
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const query = `
    query getFilteredQuotes {
      getFilteredQuotes(${filter}: "${value}" page: "0") {
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
  client.query({ query: gql(query) }).then(res => {
    const { data } = res
    if (data && data.getFilteredQuotes.total) {
      dispatch({ type: GET_QUOTES, payload: data.getFilteredQuotes.data })
    }
  }).catch(e => console.log(e))
  }
 
  return (
    <div className='search-container'>
      <form className='search-bar-container' onSubmit={handleOnSubmit}>
        <input className='search-bar' placeholder='Search...' onKeyDown={handleOnChange} onChange={handleOnChange} value={value} type='text'/>
        <img className='search-icon' onClick={handleOnSubmit} src={searchIcon} alt='Magnifying Glass Icon' />
        <img className='filter-icon' onClick={() => setIsFilter(!isFilter)} src={filterIcon} alt='Filter Icon' />
      </form>
      {isFilter &&
        <div className='filter-container'>
          <Checkbox label='Author' name='author' checked={filter === 'author'} handleFilterChange={setFilter} />
          <Checkbox label='Content' name='content' checked={filter === 'content'} handleFilterChange={setFilter} />
          <Checkbox label='Link' name='link' checked={filter === 'link'} handleFilterChange={setFilter} />
          <Checkbox label='Reference' name='reference' checked={filter === 'reference'} handleFilterChange={setFilter} />
          <Checkbox label='Book Title' name='book_title' checked={filter === 'book_title'} handleFilterChange={setFilter} />
        </div>
      }
    </div>
  )
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(SearchBar)