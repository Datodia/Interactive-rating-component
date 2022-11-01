import React from 'react'
import styled from 'styled-components'

export const Content = (props) => {
    const Content = styled.div`
        margin: 0 32px;
    `
    const Title = styled.h1`
        font-size: 28px;
        color: white;
    `
    const Para = styled.p`
        font-size: 15px;
        color: #969FAD;
        line-height: 24px;
    `
    return (
        <Content style={props.style}>
            <Title>{props.head}</Title>
            <Para>{props.para}</Para>
        </Content>
    )
}