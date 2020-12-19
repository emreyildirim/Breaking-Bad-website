import React from 'react'
import {Wrapper,Text,Author} from './Quote.styles'
const Quote = (props) => {
    return (
        <Wrapper>
          <Text> {props.quote} </Text> 
           <Author>  {props.author} </Author>
        </Wrapper>
    )
}

export default Quote
