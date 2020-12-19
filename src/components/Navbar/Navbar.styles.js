import styled from 'styled-components'


export const Wrapper = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    margin-bottom:-50px;
    position:absolute;
    z-index:2;
  
`;
export const Navigaton = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-top:25px;
    font-family: 'Manrope', sans-serif;
    font-weight:bold;
    font-size:14px;
    @media only screen and (max-width: 600px){
        font-size:5px;
    }
`;
export const NavigationLeft = styled.div`
    width:20%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media only screen and (max-width: 600px){
       width:25%;
    }
`;
export const NavItem = styled.div`
    & > a {
        color:white;
    }
`;
export const NavigationSeasons = styled.div`
    width:50%;
    display:flex;
    justify-content:flex-end

`;
export const SeasonItem = styled.div`
margin-right:20px;
@media only screen and (max-width: 600px){
      margin-right:5px;
    }
& > a {

        color:white;
    }

`;
