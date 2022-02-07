import { useRef } from 'react'
import { useMutation } from '@apollo/client'
import { SAVE_QUOTE } from './quotesQueries'
import './quotesform.css'

export default function QuotesForm() {
  const [saveQuote, { error }] = useMutation(SAVE_QUOTE)
  if (error) console.error(error)
  const formRef = useRef(null)
  const input = {
    book_title: useRef(null),
    author: useRef(null),
    content: useRef(null),
    tags: useRef(null),
    reference: useRef(null),
    link: useRef(null)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      book_title: input.book_title.current.value,
      author: input.author.current.value,
      content: input.content.current.value,
      tags: input.tags.current.value,
      reference: input.reference.current.value,
      link: input.link.current.value
    }
    saveQuote({ variables: { body } })
    formRef.current.reset()
  }
  return (
    <>
      <h1>Quotes</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type='text' ref={input.book_title} name='book_title' placeholder='Book Title'/>
        <input type='text' ref={input.author} name='author' placeholder='Author'/>
        <input type='text' ref={input.content} name='content' placeholder='Quote'/>
        <input type='text' ref={input.tags} name='tags' placeholder='Quote Tags'/>
        <input type='text' ref={input.reference} name='reference' placeholder='Reference Book'/>
        <input type='text' ref={input.link} name='link' placeholder='Link'/>
        <input className='submit-form' onClick={handleSubmit} type='submit' value='Add'/>
      </form>
    </>
  )
}
