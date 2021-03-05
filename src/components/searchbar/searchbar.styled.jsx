import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content:center;
    margin: 0 auto 15px;
`;

export const TextInput = styled.input`
    padding: 10px 15px;
    max-width: 265px;
    width:100%;
    font-size:1em;
    border:none;
    outline:none;
    box-shadow: 0 1px 6px grey;
    &:hover{
        box-shadow: 0 2px 10px blue;
    }
`;