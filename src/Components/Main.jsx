import React from 'react'
import styled from 'styled-components'

export const Main = () => {

    const Main = styled.div`
        width: 440px;
        border: 2px solid red;
        display: flex;
        margin: auto;
        align-items: center;
    `
    const Text = styled.h1`
        color: white;
        font-size: 32px;
    `
    return (
        <Main>
            <Text>
                Hello
            </Text>
        </Main>
    )
}
