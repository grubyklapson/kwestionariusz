export const Option = (props) => {
  const answer = props.data;
  const setUserChoiceValue = props.setUserChoiceValue;
  const questionId = props.questionId;

  return (
    <div className="Option" key={answer}>
      <input
        type="radio"
        onClick={() => setUserChoiceValue(answer)}
        name={questionId}
      />
      <p>{answer}</p>
    </div>
  );
};
