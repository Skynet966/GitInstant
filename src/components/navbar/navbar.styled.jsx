import styled from "styled-components";
export const NavbarContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content:center;
    align-items:center;
    margin-bottom: 30px;
    cursor: pointer;
`;
export const NavText = styled.h1`
    font-weight: 500;
    color: #565fa1;
    text-shadow: 0 0 4px #565fa1;
    margin-left: 5px;
    @media(max-width:375px){
        font-size:x-large;
    }
`;
export const Image = styled.img`
    width: 80px;
`;