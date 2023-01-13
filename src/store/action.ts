import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../types/block-data";

const setBlock = createAction(ActionType.SetBlock, (block) => ({
  payload: {
    block,
  },
}));

const setIsButtonDisabled = createAction(ActionType.SetIsButtonDisabled, (isButtonDisabled: boolean) => ({
  payload: {
    isButtonDisabled,
  },
}));

export { setBlock, setIsButtonDisabled };
