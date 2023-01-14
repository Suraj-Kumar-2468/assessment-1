import React, { useContext } from "react";
import { QuestionsContext } from "../../App";
import Text from "../../Components/Text";

const Result = () => {
  const questionData = useContext(QuestionsContext);
  return (
    <div className="flex p-4 flex-col h-full">
      <Text className="text-2xl font-semibold mb-7">Result</Text>
      {questionData?.answer &&
        Object.keys(questionData?.answer).map((data) => {
          return (
            <div className="flex text-lg text-suvaGrey-1">
              <Text>{data} :</Text>
              <Text className="ml-6">
                {questionData?.answer &&
                  (typeof questionData?.answer[data] === "object"
                    ? questionData?.answer[data].join(", ")
                    : questionData?.answer[data])}
              </Text>
            </div>
          );
        })}
    </div>
  );
};

export default Result;
