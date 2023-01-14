import React, { useContext } from "react";
import { QuestionsContext } from "../../../App";

interface Mcqinterface {
  value?: string;
}

const DateInput = ({ value }: Mcqinterface) => {
  const questionData = useContext(QuestionsContext);
  const handleChange = (newValue: string) => {
    questionData?.handleAnswer(
      questionData?.currentQuestionData?.question,
      newValue
    );
  };
  return (
    <div className="m-3">
      <input
        className="outline-none border w-full p-3 text-lg border-whiteSmoke-1 rounded"
        type="date"
        value={value}
        onChange={(event) => {
          handleChange((event.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
};

export default DateInput;
