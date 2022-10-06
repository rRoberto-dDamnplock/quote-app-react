import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTE = [
  {
    id: 'q1',
    author: 'Trujillo',
    text: 'TU es una puta',
  },
  {
    id: 'q2',
    author: 'Oliveira',
    text: 'Receba tu es una puta',
  }
]

export default function AllQuotes() {
  return (
    <div>
        <QuoteList quotes={DUMMY_QUOTE}/>
    </div>
  )
}
