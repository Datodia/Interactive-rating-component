import React from 'react'
import styled from 'styled-components'
import { Star } from './Star'
import { Content } from './Content'
import { Buttons } from './Buttons'
import { Submit } from './Submit'

export const Main = () => {

    const Main = styled.div`
        width: 412px;
        height: 416px;
        border: 2px solid red;
        border-radius: 30px;
        background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: 30vh;
    `
    return (
        <Main>
            <Star />
            <Content
                head="How did we do?"
                para="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
            />
            <Buttons />
            <Submit />
        </Main>
    )
}
