import Styled from "styled-components";

export const Wrapper = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    position: relative;
`;

export const Button = Styled.button`
    width: 35px;
    height: 35px;
    font-size: 18px;
    background: #f4b6c2;
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
`;

export const Div = Styled.div`
    width: 100%;
`;
