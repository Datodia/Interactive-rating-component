import React, { useState } from 'react'
import styled from 'styled-components'
import { Star } from './Star'
import { Content } from './Content'
import { Buttons } from './Buttons'
import { Submit } from './Submit'
import { Thanks } from './Thanks'

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
    const [num, setNum] = useState()
    const [show, setShow] = useState(true)
    const handleClick = () => {
        { num && setShow(false) }
    }


    if (show) {
        return (
            <Main>
                <Star />
                <Content
                    head="How did we do?"
                    para="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
                />
                <Buttons
                    setValue={setNum}
                />
                <Submit
                    click={handleClick}
                />
            </Main>
        )
    } else {
        return (
            <Main>
                <Thanks
                    setValue={num}
                />
                <Content
                    style={{
                        textAlign: 'center'
                    }}
                    head="How did we do?"
                    para="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
                />
            </Main>
        )
    }


}
