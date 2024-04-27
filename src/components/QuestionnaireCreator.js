import { useState } from "react";
import { nanoid } from "nanoid";
import { Question } from "./Question";
import { AddQuestion } from "./AddQuestion";
export const QuestionnaireCreator = () => {
  const [userChoices, setUserChoices] = useState([]);
  const answers = ["Tak", "Raczej tak", "Nie wiem", "Raczej nie", "Nie"];
  const [questions, setQuestions] = useState([
    {
      id: nanoid(),
      text: "Czy w obecnej chwili jesteś szczęśliwy?",
      answers: ["Tak", "Nie wiem", "Nie"],
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
  const deleteQuestion = (id) => {
    setQuestions(questions.filter((item) => item.id !== id));
  };
  const editQuestion = (id) => {
    const record = getRecordById(id);
  };
  const getRecordById = (id) => {
    const record = questions.find((x) => x.id === id);
    return record;
  };
  return (
    <div className="questionnaire-creator">
      <form onSubmit={submitHandler}>
        {questions.map((questions) => (
          <Question
            data={questions}
            getRecordById={getRecordById}
            addQuestion={addQuestion}
            deleteQuestion={deleteQuestion}
            editQuestion={editQuestion}
            setUserChoices={setUserChoices}
            userChoices={userChoices}
          />
        ))}

        <AddQuestion data={answers} addQuestion={addQuestion} />
        <button type="submit" className="end-btn">
          Zakończ
        </button>
      </form>
      <div className="results">
        <h2>Wyniki</h2>
        {userChoices.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};
