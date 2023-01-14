import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { IconButton } from "@mui/material";

interface HeaderSectionInterface {
  currentQuestion?: number;
  changeQuestionHandeler?: (data: number) => void;
}

const HeaderSection = ({
  currentQuestion,
  changeQuestionHandeler,
}: HeaderSectionInterface) => {
  return (
    <div className="w-full p-4">
      <IconButton
        onClick={() => {
          if (changeQuestionHandeler)
            currentQuestion && changeQuestionHandeler(currentQuestion - 1);
        }}
      >
        <ArrowBackRoundedIcon className="!font-extrabold !text-3xl" />
      </IconButton>
    </div>
  );
};

export default HeaderSection;
