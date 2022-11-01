import React from 'react'
import styled from 'styled-components'
import star from '../assets/star.svg'

export const Star = () => {
    const Star = styled.div`
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #262E38;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 32px;
        margin-top: 32px;
    `

    return (
        <Star>
            <img src={star} />
        </Star>
    )
}
