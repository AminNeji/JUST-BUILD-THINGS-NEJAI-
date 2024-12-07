import React from 'react'
import styled from 'styled-components'
const Question = ({questiontext}) => {
    return (
        <>
            <StyledWrapper>
                <div className='question'>
                    <p>{questiontext}</p>
                </div>
            </StyledWrapper>
        </>
    )
}
const StyledWrapper=styled.div`
    .question{
        display:flex;
        background-color:#f5f5f5;
        align-items:center;
        justify-content:flex-start;
        margin-right: 5px;
        padding: 5px;
        border-radius:25px;
}`

export default Question
