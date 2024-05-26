import React from 'react'

const Question = ({faqObject: {question, answer}}) => {
    const minus = "src/assets/images/icon-minus.svg"
    const plus = "src/assets/images/icon-plus.svg"

    const[currIcon, setCurrIcon] = React.useState(plus)
    const handleClick   = () => {
        if(currIcon === plus){
            setCurrIcon(minus)
        }else{
            setCurrIcon(plus)
        }
    }
  return (
    <div>
        <div className='question'> 
        <h4 className='ques' onClick={handleClick}>{question}</h4>
        <img className='image' src={currIcon} onClick={handleClick} alt="no image" />
        </div>
        <p className={`answer ${currIcon === plus ? "hidden" : ""}`}>
        {answer}
      </p>


    </div>
  )
}

export default Question