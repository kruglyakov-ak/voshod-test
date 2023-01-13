import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../types/block-data";

const setBlockData = createAction(ActionType.SetBlockData, (block) => ({
  payload: {
    block,
  },
}));
const setBlockStatus = createAction(ActionType.SetBlockStatus, (block) => ({
  payload: {
    block,
  },
}));

const setIsButtonDisabled = createAction(ActionType.SetIsButtonDisabled, (isButtonDisabled: boolean) => ({
  payload: {
    isButtonDisabled,
  },
}));

export { setBlockData, setIsButtonDisabled, setBlockStatus };
