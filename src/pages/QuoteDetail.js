import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";
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


export default function QuoteDetail() {
  const params = useParams();

  const quote = DUMMY_QUOTE.find(quote => quote.id === params.quoteId)
  if(!quote){
    return <p>No quote found</p>
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author}/>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </div>
  );
}
