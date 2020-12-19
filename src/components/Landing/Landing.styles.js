import styled from 'styled-components'
import Background from '../../assets/Background.png'

export const Wrapper = styled.div`
width:100vw;
height:100vh;
background-image:url(${Background});
background-size:100%;
display:flex;
align-items:center;
justify-content:center;
`;
export const Content = styled.div`
width:100%;
height:40%;
margin-top:15%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

 &>div{
    width:100%;
    text-align:center;
}
`;
