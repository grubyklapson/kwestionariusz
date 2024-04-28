export const Option = (props) => {
  const answer = props.data;
  const setUserChoiceValue = props.setUserChoiceValue;
  const userChoiceValue = props.userChoiceValue;
  const questionId = props.questionId;
  const setUserChoices = props.setUserChoices;
  const userChoices = props.userChoices;
  const setChoiceHandler = () => {
    setUserChoiceValue(answer);
    setUserChoices([...userChoices, { id: questionId, answer }]);
    console.log(userChoices.includes({id: questionId, answer: userChoiceValue}));
    console.log(userChoices)
  };
  return (
    <div className="Option" key={answer}>
      <input type="radio" onClick={setChoiceHandler} name={questionId} />
      <p>{answer}</p>
    </div>
  );
};
