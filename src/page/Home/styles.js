import Styled from "styled-components";

export const Wrapper = Styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    color: #fff;
`;

export const Title = Styled.h1`

`;

export const SubTitle = Styled.h3`

`;

export const WrapLink = Styled.div`
    margin-bottom: 2rem;
    a {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
        padding: 0.5rem;
        background: #f4b6c2  ;
        border-radius: 5px;
        color: #fff;
        display: inline-block;
    }
`;

export const Button = Styled.button`
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
    padding: 0.5rem;
    background: #f4b6c2  ;
    border-radius: 5px;
    color: #fff;
    border: none;
    margin-bottom: 1rem;
`;
