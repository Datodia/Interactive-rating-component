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
        border-radius: 30px;
        background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width : 700px){
            width: 327px;
            height: 360px;
        }
    `
    const [num, setNum] = useState()
    const [show, setShow] = useState(true)
    const handleClick = () => {
        { num && setShow(false) }
    }

    return (
        <Main>
            {show ? (
                <>
                    <Star />
                    <Content
                        head="How did we do?"
                        para="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
                    />
                    <Buttons
                        setValue={setNum}
                        value={num}
                    />
                    <Submit
                        click={handleClick}
                    />
                </>
            ) : (
                <>
                    <Thanks
                        value={num}
                    />
                    <Content
                        style={{
                            textAlign: 'center'
                        }}
                        head="Thank You!"
                        para="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
                    />
                </>
            )}
        </Main>
    )


    // if (show) {
    //     return (
    // <Main>
    //     <Star />
    //     <Content
    //         head="How did we do?"
    //         para="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
    //     />
    //     <Buttons
    //         setValue={setNum}
    //         value={num}
    //     />
    //     <Submit

    //     />
    // </Main>
    //     )
    // } else {
    //     return (
    // <Main>
    //     <Thanks
    //         value={num}
    //     />
    //     <Content
    //         style={{
    //             textAlign: 'center'
    //         }}
    //         head="Thank You!"
    //         para="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
    //     />
    // </Main>
    //     )
    // }


}
