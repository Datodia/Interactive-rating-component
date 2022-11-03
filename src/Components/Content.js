import React from 'react'
import styled from 'styled-components'

export const Content = (props) => {
    const Content = styled.div`
        margin: 0 32px;
        @media screen and (max-width : 700px){
            margin: 0 24px
        }
    `
    const Title = styled.h1`
        font-size: 28px;
        color: white;
        @media screen and (max-width : 700px){
            font-size: 24px;
        }
    `
    const Para = styled.p`
        font-size: 15px;
        color: #969FAD;
        line-height: 24px;
        @media screen and (max-width : 700px){
            font-size: 14px;
        }
    `
    return (
        <Content style={props.style}>
            <Title>{props.head}</Title>
            <Para>{props.para}</Para>
        </Content>
    )
}