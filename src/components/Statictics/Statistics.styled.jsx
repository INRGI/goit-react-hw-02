import styled from '@emotion/styled';

export const List = styled.ul`
    list-style:none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 0;
`;

export const Element = styled.li`
    font-size: 20px;
    width: 250px;
    height: 30px;
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-left: 20px;
`;