import React, { useState } from 'react'
import styled from 'styled-components'

export const Submit = (props) => {
    const Button = styled.button`
        width: 341px;
        height: 45px;
        margin: auto;
        border-radius: 22px;
        background-color: #FC7614;
        border: none;
        color: white;
        font-size: 15px;
        font-family: 'Overpass';


        &:hover{
            background-color: white;
            color: #FC7614;
        }
    `
    return (
        <Button
            onClick={props.test}
        >Submit</Button>
    )
}
