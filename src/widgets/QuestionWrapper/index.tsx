import classNames from "classnames";
import React, { useContext } from "react";
import HeaderSection from "../HeaderSection";
import { Button } from "@mui/material";
import { QuestionsContext } from "../../App";
import { questions } from "../../Mock/Questions";

interface quiestionWrapperProps {
  children: JSX.Element | JSX.Element[] | string | number | any;
  classToOverRide: string;
  isCompleted: boolean;
}

const QuestionWrapper = ({
  children,
  isCompleted,
  classToOverRide,
}: quiestionWrapperProps) => {
  const questionData = useContext(QuestionsContext);
  return (
    <div className={classNames(classToOverRide, "bg-aliceBlue-1")}>
      {!isCompleted && (
        <HeaderSection
          currentQuestion={questionData?.currentQuestion}
          changeQuestionHandeler={questionData?.changeQuestionHandeler}
        />
      )}
      {children}
      {!isCompleted && (
        <div className="w-full p-4 flex">
          <Button
            classes={{
              root: "!bg-freeSpeechRed-1 !ml-auto !text-white !p-1 !w-1/5",
            }}
            onClick={() => {
              if (questionData) {
                questionData?.changeQuestionHandeler(
                  questionData?.currentQuestion + 1
                );
              }
            }}
          >
            {questionData &&
            questionData?.currentQuestion < questions?.questions?.length - 1
              ? "Next"
              : "Submit"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuestionWrapper;
