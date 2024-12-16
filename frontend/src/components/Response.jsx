import React from 'react'
import styled from 'styled-components'
const Response = ({ responsetext }) => {
  const renderFormattedText = (text) => {
    const lines = text.split('\n');
    return (
      <div>
        {lines.map((line, index) => {
          const match = line.match(/^(\d+)\.\s\*\*(.*?)\*\*/);
          if (match) {
            const [_, number, title] = match; 
            return (
              <p key={index}>
                <span className="number">{number}.</span>{' '}
                <span className="title">{title}</span>{' '}
                {line.replace(match[0], '').trim()}
              </p>
            );
          }
          return <p key={index}>{line}</p>;
        })}
      </div>
    );
  };
  return (
    <div>
      <StyledWrapper>
        <div className='response'>
          {responsetext ? renderFormattedText(responsetext) : <p>Loading...</p>}
        </div>
      </StyledWrapper>
    </div>
  )
}
const StyledWrapper = styled.div`
    .response{
        display:flex;
        background-color:#131313;
        color:white;
        align-items:center;
        justify-content:flex-start;
        margin-left: 5px;
        padding: 10px;
        box-shadow: 0px 1px 14px -3px rgba(0,0,0,0.37);
        border-radius:25px;
}
        p {
    margin: 5px 0;
  }
  .number {
    color: #ff9800; /* Highlighted color for numbers */
    font-weight: bold;
  }
  .title {
    color: #4caf50; /* Highlighted color for titles */
    font-weight: bold;
  }`

export default Response
