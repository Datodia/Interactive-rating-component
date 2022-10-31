import React from 'react'
import styled from 'styled-components'

export const Main = () => {

    const Main = styled.div`
        width: 412px;
        height: 416px;
        border: 2px solid red;
        border-radius: 30px;
        background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
        display: flex;
        margin: auto;
        margin-top: 30vh;
        align-items: center;
        justify-content: center;
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
