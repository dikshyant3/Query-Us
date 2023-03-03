import React from "react";
import "./QuestionItem.css";
import { Avatar } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";

const QuestionItem = ({ question }) => {
  return (
    <>
      <div className="card" key={question.id}>
        <div className="question-container">
          <div className="question-container-main">
            <div className="question-container-left">
              <div className="question-sidebar">
                <div className="sidebar-content">
                  <Avatar />
                </div>
                <div className="sidebar-content">
                  <ExpandLessIcon />
                  <p>{question.voteCount}</p>
                </div>
              </div>
            </div>
            <div className="question-container-right">
              <div className="question-container-top">
                <div className="timestamp">
                  <div className="timestamp-date">
                    <small>
                      {question.timestamp[0] +
                        "/" +
                        question.timestamp[1] +
                        "/" +
                        question.timestamp[2]}
                    </small>
                    <small>at</small>
                  </div>
                  <div className="timestamp-time">
                    <small>
                      {question.timestamp[3] + ":" + question.timestamp[4]}
                    </small>
                  </div>
                </div>
                <div className="question-tags">
                  {question.tags.map((tag) => (
                    <div className="tag">{tag}</div>
                  ))}
                </div>
              </div>
              <div className="question-body">
                <div className="question-title">
                  <Link>
                    <p>{question.questionTitle}</p>
                  </Link>
                </div>
              </div>
              <div className="question-footer">
                <div className="question-stats">
                  <div className="question-stat">
                    <p>{question.answerCount}</p>
                    <span>answers</span>
                  </div>
                  <div className="question-stat">
                    <p>{question.views}</p>
                    <span>views</span>
                  </div>
                </div>

                <div className="answer-button">
                  <Link to="/answersPage">
                    <button className="btn-answer">Answer</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionItem;
