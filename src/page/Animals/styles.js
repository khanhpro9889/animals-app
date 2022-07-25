import Styled from "styled-components";

export const Title = Styled.h2`
    margin-top: 0px;
`;

export const Wrapper = Styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative ;
`;

export const BackButton = Styled.button`
    width: 35px;
    height: 35px;
    font-size: 18px;
    background: #f4b6c2;
    color: #fff;
    cursor: pointer;
    border: none;
    position: absolute;
    top: 0px;
    right: 0px;
`;

export const Alert = Styled.h3`
    text-align:center;
`;

export const FlexCenter = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
