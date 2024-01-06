import styled from '@emotion/styled'


export const Button = styled.button`
    outline: none;
    cursor: pointer;
    border: none;
    height: 55px;
    width: 90px;
    font-size: 20px;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s ease;
    text-transform: capitalize;

    :hover{
        height: 58px;
        width: 93px;
    }
`;

export const Container = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;