import React, { useContext } from "react";
import { QuestionsContext } from "../../App";
import Mcq from "../Input/mcq";
import { questionProtocol } from "../../Mock/Questions";
import Descriptive from "../Input/discriptive";
import MultipleAnswers from "../Input/MiltipleAnswers";
import DateInput from "../Input/DateInput";

const handleInputRender = (questionData?: questionProtocol, value?: any) => {
  switch (questionData?.questiontype) {
    case "Radio":
      return (
        <>
          <Mcq options={questionData?.questionoption} value={value} />
        </>
      );
    case "Date":
      return (
        <>
          <DateInput value={value} />
        </>
      );
    case "Textarea":
      return <Descriptive value={value} />;
    case "Checkbox":
      return (
        <MultipleAnswers options={questionData?.questionoption} value={value} />
      );
  }
};

const InputSection = () => {
  const questionData = useContext(QuestionsContext);

  return (
    <>
      {handleInputRender(
        questionData?.currentQuestionData,
        questionData?.answer?.[questionData?.currentQuestionData?.question]
      )}
    </>
  );
};

export default InputSection;
