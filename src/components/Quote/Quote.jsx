import React, { useEffect, useState }  from 'react'
import './Quote.css'
import { getQuote } from '../../services/fetch';

const Quote = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchQuote = async () => {
        setQuote(await getQuote());
    }

    fetchQuote();
}, [])


  return (
    <div className="quote-container">
      <p className="quote">"{quote.quote}"</p>
      <span className="author">{quote.author}</span>
    </div>
  )
}

export default Quote