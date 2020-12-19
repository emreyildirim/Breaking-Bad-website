import React from 'react'
import {Wrapper,Info,LinkedinIcon,GithubIcon,Account} from "../components/Contacts/Contacts.styles";


const Contact = () => {
    return (
        <Wrapper>
          <Info href="https://www.linkedin.com/in/emre-yildirim98/">
            <LinkedinIcon/>
            <Account>emre-yildirim98</Account>
          </Info>
          <Info href="https://www.github.com/emreyildirim">
            <GithubIcon/>
            <Account>@emreyildirim</Account>
          </Info>
        </Wrapper>
    )
}

export default Contact
