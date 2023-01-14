import React, { useContext } from "react";
import { optionInterface } from "../../../Mock/Questions";
import FormControlLabel from "@mui/material/FormControlLabel";
import { QuestionsContext } from "../../../App";
import { Checkbox } from "@mui/material";

interface Mcqinterface {
  options: Array<optionInterface>;
  value?: Array<string>;
}

const MultipleAnswers = ({ options, value }: Mcqinterface) => {
  const questionData = useContext(QuestionsContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let Localvalue = value || [];

    if (Localvalue.includes(event?.target?.value)) {
      Localvalue = Localvalue?.filter((data) => data !== event.target.value);
    } else Localvalue?.push(event?.target?.value);

    questionData?.handleAnswer(
      questionData?.currentQuestionData?.question,
      Localvalue
    );
  };

  return (
    <div className="flex flex-col">
      {options?.map((data) => {
        return (
          <FormControlLabel
            className="px-4 pt-1  border !mx-0 border-aliceBlue-1"
            classes={{
              label: "!text-sm !text-suvaGrey-1",
            }}
            value={data.optionvalue}
            control={
              <Checkbox
                name={data.optionvalue}
                // checked={checked[0] && checked[1]}
                // indeterminate={checked[0] !== checked[1]}
                onChange={handleChange}
              />
            }
            label={data.optionvalue}
          />
        );
      })}
    </div>
  );
};

export default MultipleAnswers;
