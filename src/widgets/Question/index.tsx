import React, { useContext } from "react";
import { QuestionsContext } from "../../App";
import Text from "../../Components/Text";

const Question = () => {
  const questionData = useContext(QuestionsContext);

  return (
    <div className="flex justify-center items-center border border-aliceBlue-1 ">
      <Text className="mt-8 mb-3 text-xl text-suvaGrey-1">
        {questionData?.currentQuestionData?.question}
      </Text>
    </div>
  );
};

export default Question;
