import React from 'react'
import {Wrapper,Content} from './Landing.styles'
const Landing = ({children}) => {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}

export default Landing
