import { useState } from "react";
import { nanoid } from "nanoid";
import { Question } from "./Question";
import { AddQuestion } from "./AddQuestion";
export const QuestionnaireCreator = () => {
  const [userChoices, setUserChoices] = useState([]);
  const [info, setInfo] = useState("");
  const answers = ["Tak", "Raczej tak", "Nie wiem", "Raczej nie", "Nie"];
  const [questions, setQuestions] = useState([
    {
      id: nanoid(),
      text: "Czy w obecnej chwili jesteś szczęśliwy?",
      answers: answers,
    },
    {
      id: nanoid(),
      text: "Czy gdyby wybuchła wojna, wstąpiłbyś do wojska?",
      answers: answers,
    },
    {
      id: nanoid(),
      text: "Czy na ten moment czujesz, że spełniłeś się w życiu?",
      answers: answers,
    },
    {
      id: nanoid(),
      text: "Czy chciałbyś mieć psa?",
      answers: answers,
    },
  ]);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const addQuestion = (value) => {
    value !== "" &&
      setQuestions([
        ...questions,
        {
          id: nanoid(),
          text: value,
          answers: answers,
        },
      ]);
  };
  const getRecordById = (id) => {
    const recordIndex = questions.findIndex(obj => obj.id === id);
    return recordIndex;
  };
  const deleteQuestion = (id) => {
    setQuestions(questions.filter((item) => item.id !== id));
  };
  const editQuestion = (id, value) => {
    const record = getRecordById(id);
    questions[record].text = value;
  };
  const endHandler = () => {
    setInfo("Pomyłsnie zakończono kwestionariusz.");
  };
  return (
    <div className="questionnaire-creator">
      <form onSubmit={submitHandler}>
        {questions.length > 0 ? (
          questions.map((questions) => (
            <Question
              data={questions}
              getRecordById={getRecordById}
              addQuestion={addQuestion}
              deleteQuestion={deleteQuestion}
              editQuestion={editQuestion}
              setUserChoices={setUserChoices}
              userChoices={userChoices}
            />
          ))
        ) : (
          <h3 style={{ color: "grey" }}>Brak pytań w kwestionariuszu</h3>
        )}

        <AddQuestion data={answers} addQuestion={addQuestion} />
        <button type="submit" className="end-btn" onClick={endHandler}>
          Zakończ
        </button>
        <h4>{info}</h4>
      </form>
    </div>
  );
};
