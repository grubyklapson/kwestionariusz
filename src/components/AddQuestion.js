import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
export const AddQuestion = (props) => {
  const [checker, setChecker] = useState(true);
  const [newQuestion, setNewQuestion] = useState("");
  const answers = props.data;
  const addQuestion = props.addQuestion;
  const addHandler = () => {
    checker ? setChecker(false) : setChecker(true);
    addQuestion(newQuestion);
    setNewQuestion("");
  };
  return (
    <div className="question">
      <div className="question-header">
        {checker ? (
          <h3>Dodaj nowe pytanie</h3>
        ) : (
          <input
            type="text"
            className="new-question-input"
            onChange={(e) => setNewQuestion(e.target.value)}
          />
        )}
        <div className="icon-group">
          {checker ? (
            <FaPlus
              onClick={() => (checker ? setChecker(false) : setChecker(true))}
              className="icon"
            />
          ) : (
            <div className="icon-group">
              <FaCheck onClick={addHandler} className="icon" />
              <RiCloseFill
                className="icon"
                onClick={() => (checker ? setChecker(false) : setChecker(true))}
              />
            </div>
          )}
        </div>
      </div>
      <div className="answers">
        {answers?.map((item) => (
          <div className="Option" key={item}>
            <input type="radio" name="answerCreator" disabled={true} />
            <p style={{ color: "grey" }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
