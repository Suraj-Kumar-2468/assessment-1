import React, { useContext } from "react";
import { optionInterface } from "../../../Mock/Questions";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { QuestionsContext } from "../../../App";

interface Mcqinterface {
  options: Array<optionInterface>;
  value?: string;
}

const Mcq = ({ options, value }: Mcqinterface) => {
  const questionData = useContext(QuestionsContext);
  console.log(value);
  return (
    <FormControl variant="standard" className="!w-full ">
      <RadioGroup
        onChange={(event) =>
          questionData?.handleAnswer(
            questionData?.currentQuestionData?.question,
            (event.target as HTMLInputElement).value
          )
        }
        value={value}
        name="mcqQuestion"
      >
        {options?.map((data) => {
          return (
            <FormControlLabel
              className="px-4 pt-1  border !mx-0 border-aliceBlue-1"
              classes={{
                label: "!text-sm !text-suvaGrey-1",
              }}
              value={data.optionvalue}
              control={<Radio size="small" />}
              label={data.optionvalue}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default Mcq;
