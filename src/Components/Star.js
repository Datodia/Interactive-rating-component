import React from 'react'
import styled from 'styled-components'
import star from '../assets/star.svg'

export const Star = () => {
    return (
        <Stars>
            <img src={star} />
        </Stars>
    )
}

const Stars = styled.div`
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #262E38;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 32px;
        margin-top: 32px;

        @media screen and (max-width : 700px){
            width: 40px;
            height: 40px;
            margin-left: 24px;
            margin-top: 24px;
        }
    `
