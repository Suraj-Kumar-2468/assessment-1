import React from "react";
import QuestionWrapper from "../../widgets/QuestionWrapper";
import Question from "../../widgets/Question";
import InputSection from "../../widgets/InputSection";
import Result from "../../widgets/Result";
import Text from "../../Components/Text";

/**
 * Component acting as a container for question and answers and error in Case
 * @Component Questions
 * @param error : string
 * @param isCompleted : boolean
 */

interface questionInterface {
  error: string;
  isCompleted: boolean;
}

const Questions = ({ error, isCompleted }: questionInterface) => {
  return (
    <div className="w-full flex items-center flex-col">
      <Text className="text-crimson-1 text-lg font-bold">{error}</Text>
      <QuestionWrapper isCompleted={isCompleted} classToOverRide="w-2/5">
        <div className="bg-white h-80">
          {isCompleted ? (
            <Result />
          ) : (
            <>
              <Question />
              <InputSection />
            </>
          )}
        </div>
      </QuestionWrapper>
    </div>
  );
};

export default Questions;
