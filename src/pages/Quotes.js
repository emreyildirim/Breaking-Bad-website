import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Quote from '../components/Quote/Quote'

const Quotes = () => {

    const [quotes,setQuotes]= useState([])
    const [number,setNumber]= useState(0)
    
    useEffect(()=>{
        const FetchQuotes = async () =>{
            const response = await axios(
                'https://www.breakingbadapi.com/api/quotes'
            )
                setQuotes(response.data)
        }
        FetchQuotes();
     
    },[])

    useEffect (()=>{
        const interval = setInterval(
          
            () => setNumber(Math.floor(Math.random() * 51+1)),
            5000
          );
          return () => {
            clearInterval(interval);
          };
    },[])
 
    console.log(number)
    
    return (
        <>
        <Quote 
            quote = {quotes[number]?.quote}
            author = {quotes[number]?.author}
        />
        </>
    )
}

export default Quotes
