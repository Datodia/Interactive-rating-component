import React from 'react'
import styled from 'styled-components'

export const Buttons = (props) => {
    const Wrapper = styled.div`
        margin: 24px 32px;
        display: flex;
        gap: 21px;
    `
    const Button = styled.button`
        width: 51px;
        height: 51px;
        border-radius: 50%;
        background-color: #262E38;
        border: none;
        color: white;

        &:hover{
            background-color: #FC7614;
        }
        &:focus{
            background-color: gray;
        }
    `

    const buttonArray = [1, 2, 3, 4, 5]
    const handleClick = (e) => {
        console.log(e.target.id)
    }

    return (
        <Wrapper>
            {buttonArray.map((value) => {
                return (
                    <Button onClick={handleClick} id={value}>{value}</Button>
                )
            })}
        </Wrapper>
    )
}
