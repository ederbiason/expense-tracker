import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: white;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`

const baseStyles = css`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`

export const Input = styled.input`
    ${baseStyles}
`

export const Select = styled.select`
    ${baseStyles}
`

export const Button = styled.button`
    ${baseStyles}
    background-color: lightblue;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: all ease .2s;

    &:hover {
        filter: brightness(.9);
    }
`