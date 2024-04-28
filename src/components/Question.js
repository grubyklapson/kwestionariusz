import { Option } from "./Option";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
export const Question = (props) => {
  const [userChoiceValue, setUserChoiceValue] = useState("");
  const [editToggle, setEditToggle] = useState(true);
  const [editedQuestion, setEditedQuestion] = useState("");
  const { id, text, answers } = props.data;
  const deleteQuestion = props.deleteQuestion;
  const editQuestion = props.editQuestion;
  const setUserChoices = props.setUserChoices;
  const userChoices = props.userChoices;
  const getRecordById = props.getRecordById;
  const editHandler = () => {
    editToggle ? setEditToggle(false) : setEditToggle(true);
  };
  return (
    <div className="question" key={id}>
      <div className="question-header">
        {editToggle ? (
          <h3>{text} {userChoiceValue}</h3>
        ) : (
          <input
            type="text"
            className="new-question-input"
            onChange={(e) => setEditedQuestion(e.target.value)}
            placeholder={text}
          />
        )}
        <div className="icon-group">
          {editToggle ? (
            <div className="icon-group">
              <MdEdit
                onClick={() =>
                  editToggle ? setEditToggle(false) : setEditToggle(true)
                }
                className="icon"
              />
              <MdDelete onClick={() => deleteQuestion(id)} className="icon" />
            </div>
          ) : (
            <div className="icon-group">
              <FaCheck onClick={editHandler} className="icon" />
              <RiCloseFill
                className="icon"
                onClick={() =>
                  editToggle ? setEditToggle(false) : setEditToggle(true)
                }
              />
            </div>
          )}
        </div>
      </div>
      <div className="answers">
        {answers.map((item) => (
          <Option
            data={item}
            setUserChoiceValue={setUserChoiceValue}
            setUserChoices={setUserChoices}
            questionId={id}
          />
        ))}
      </div>
    </div>
  );
};
