import React, { useState } from 'react'
import "./Quez.css"
import AboutText from '../About/AboutText'
export default function Quez2() {

    const [Question] = useState([
        {
          number: 1,
          qtext: "Which programming language is commonly used for front-end web development?",
          Answer: [
            { AnswerText: 'Java', istrue:"false"},
            { AnswerText: 'HTML', istrue:"true"},
            { AnswerText: 'C++', istrue:"false"},
          ]
        },
        {
          number: 2,
          qtext: "What does CSS stand for?",
          Answer: [
            { AnswerText: 'Cascading Style Sheets', istrue:"true"},
            { AnswerText: 'Creative Style System', istrue:"false"},
            { AnswerText: 'Computer Styling Service', istrue:"false"},
          ]
        },
        {
          number: 3,
          qtext: "Which technology is used for creating interactive web interfaces?",
          Answer: [
            { AnswerText: 'React', istrue:"true"},
            { AnswerText: 'PHP', istrue:"false"},
            { AnswerText: 'MySQL', istrue:"false"},
          ]
        },
        {
          number: 4,
          qtext: "What is the purpose of JavaScript in web development?",
          Answer: [
            { AnswerText: 'Managing databases', istrue:"false"},
            { AnswerText: 'Styling web pages', istrue:"false"},
            { AnswerText: 'Adding interactivity and dynamic functionality', istrue:"true"},
          ]
        },
      ]);

   const [score , setScore]=useState(0)
    const [submitHand, setSubmit] = useState(false)
    const [checkBox, SetCheckbox] = useState(false)
    const [numq, setnumq] = useState(0)
    const SubmitHandler = () => {
        setSubmit(true)
        if (checkBox === true) {
            setnumq(numq + 1)
            SetCheckbox(false)
            setSubmit(false)
        }

    }
    const ChangeCheckbox = (event,Answeritem) => {
        SetCheckbox(true)
    }

    const istruefalse =(Answeritem)=>{
  if (Answeritem === "true") {
            setScore(score + 1)

        } else {
            return null
        }
    }
    return (
    <div className="wquez w-100">
        <div className='cquez'>
        <AboutText titr="Your Score" >
        This test is designed to assess your proficiency level in web development and programming. It aims to evaluate your knowledge and skills specifically related to web development. By taking this test, you will be able to gauge your proficiency in various aspects of web programming, including HTML, CSS, JavaScript, and other relevant technologies. The test will cover topics such as front-end development, back-end development, web frameworks, database management, and overall web application architecture. The results of this test will provide you with valuable insights into your current skill level and areas where you may need improvement.
        </AboutText>
        <div className="quiz-container" id="quiz">
            {numq < 4 ? (
       
        
        <><div className="quiz-header">
                    <h2 >{Question[numq].number} - {Question[numq].qtext} </h2>
                    <ul>
                        {Question[numq].Answer.map((Answeritem, index) => {
                            return (
                                <li>

                                    <input onClick={()=>istruefalse(Answeritem.istrue)} type="radio" value={checkBox} onChange={(event) => ChangeCheckbox(event)} name="answer" key={index} className="answer " />
                                    <label className='p-3' htmlFor="c" id="c_text"> {Answeritem.AnswerText}</label>


                                </li>
                            )
                        })}
                        {(submitHand) && (!checkBox) ? <p>یک گزینه انتخاب نمایید</p> : null}
                        <button onClick={SubmitHandler} id="submit">Next</button>
                    </ul>
                </div></>

            ) : <div className="quiz-header score">نمره شما: {score} از {numq}
                
                </div>}
        </div>
    
        </div>
        </div>
        )
}
