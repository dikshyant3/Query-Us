import React from 'react'

const AddQuestion = () => {
  return (
    <div className="add-questions">
        <div className="add-question-container">
            <div className="header">
                <h2>Ask a question</h2>
            </div>
            <div className="questions__container">
                <div className="question-options">
                    <div className="question-option">
                        <div className="questionTitle">
                            <h3>Title</h3>
                            <input type="text"  />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AddQuestion