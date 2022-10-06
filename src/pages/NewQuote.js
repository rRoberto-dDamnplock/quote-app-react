import React from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

export default function NewQuote() {
const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)


    history.push('/quotes')
  }
  return (
    <div><QuoteForm onAddQuote={addQuoteHandler}/></div>
  )
}
