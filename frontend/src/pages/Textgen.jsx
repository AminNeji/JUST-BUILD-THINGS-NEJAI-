import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Questiondiv from '../components/Question';
import Responsediv from '../components/Response';

const Textgen = () => {
    const [Questions, setQuestions] = useState([]);
    const [Responses, setResponses] = useState([]);

    const addQuestion = (Question) => {
        setQuestions(() => [...Questions, Question]);
    };

    const handleFetch = async (questionText, index) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_TEXT_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "messages": [
                        {
                            "role": "user",
                            "content": questionText,
                        },
                    ],
                }),
            });

            const data = await response.json();
            const newResponse = data.choices[0].message.content;

            setResponses((prev) => {
                const updatedResponses = [...prev];
                updatedResponses[index] = newResponse;
                return updatedResponses;
            });
        } catch (err) {
            console.error("Error fetching response:", err);
        }
    };
    useEffect(() => {
        if (Questions.length > 0) {
            const lastIndex = Questions.length - 1;
            handleFetch(Questions[lastIndex], lastIndex);
        }
    }, [Questions]);

    return (
        <div className="textgen">
            <div className="container">
                <div className="text-container">
                    {Questions.map((questionText, index) => (
                        <div key={index}>
                            <div className="question-container">
                                <Questiondiv questiontext={questionText} />
                            </div>
                            <div className="response-container">
                                {Responses[index] ? (
                                    <Responsediv responsetext={Responses[index]} />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                    <Input onAddQuestion={addQuestion} />
            </div>
        </div>
    );
};

export default Textgen;
