import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
const Input = ({onAddQuestion}) => {
    const [Question,setQuestion]= useState("");
    const handleAdd = () => {
      if (Question.trim()) {
          onAddQuestion(Question);
          setQuestion('');
      }
  };
    return (
        <>
            <StyledWrapper>
                <div className="IN">
                    <input placeholder="Enter your text..." className="input" name="text" value={Question} type="text" onChange={(e)=>setQuestion(e.target.value)}/>
                    <button onClick={handleAdd}><svg xmlns="http://www.w3.org/2000/svg" width="5wh" height="5vh" viewBox="0 0 28 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button>
                </div>
            </StyledWrapper>
        </>
    );
}

const StyledWrapper = styled.div`
  .input{
    background-color:white;
    color:black;
    font-family: monospace;
    width: 40vw;
    height:7.5vh;
    padding: 10px;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
  }
  .input:focus {
    outline-color: black;
  }
  button {
  background-color: black;
  color:white;
  border: none;
  padding: 5px 10px;
  width: 4vw;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  justify-content: center;`;

export default Input;
