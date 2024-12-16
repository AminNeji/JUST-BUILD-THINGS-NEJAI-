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
        background-color:#e8e8e8;
        align-items:center;
        justify-content:flex-start;
        border: 1px solid black;
        margin-right: 5px;
        padding: 12px;
        border-radius:25px;
}`

export default Question
