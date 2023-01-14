import { TextareaAutosize } from "@mui/material";
import React, { useContext } from "react";
import { QuestionsContext } from "../../../App";

interface Mcqinterface {
  value?: string;
}

const Descriptive = ({ value }: Mcqinterface) => {
  const questionData = useContext(QuestionsContext);
  return (
    <div className="!m-4 border border-whiteSmoke-1 p-2 rounded-md">
      <TextareaAutosize
        minRows={3}
        value={value}
        onChange={(event) =>
          questionData?.handleAnswer(
            questionData?.currentQuestionData?.question,
            event?.target?.value
          )
        }
        placeholder="Type Your Answer..."
        className="!resize-none !outline-none !w-full !max-h-20 !overflow-auto"
      />
    </div>
  );
};

export default Descriptive;
