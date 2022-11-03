import React, { useState } from 'react'
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
        cursor: pointer;

        &:hover{
            background-color: #FC7614;
        }
        // &:focus{
        //     background-color: gray;
        // }
    `

    const buttonArray = [1, 2, 3, 4, 5]
    return (
        <Wrapper>
            {buttonArray.map((value, key) => {
                return (
                    <Button
                        onClick={(e) => {

                            props.setValue(e.target.id)
                            e.target.style.backgroundColor = "gray"
                            console.log(e.target.style)
                        }}
                        key={key}
                        id={value}
                    >{value}</Button>
                )
            })}
        </Wrapper >
    )
}
