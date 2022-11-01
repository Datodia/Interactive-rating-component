import React from 'react'
import styled from 'styled-components'
import mobile from '../assets/mobile.svg'

export const Thanks = () => {
    const Thanks = styled.div`
        height: 108px;
        width: 162px;
        margin: 45px 0 32px 0;
        margin-left: 27%;
        
    `
    const Rate = styled.div`
        width: 192px;
        height: 32px;
        background-color: #262E38;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FC7614;
        border-radius: 22px;
        margin-left: 25%;
    `
    return (
        <>
            <Thanks>
                <img src={mobile} />
            </Thanks>
            <Rate>You selected 4 out of 5</Rate>
        </>

    )
}