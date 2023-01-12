import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../types/block-data";

const setBlock1 = createAction(ActionType.SetBlock1, (block1) => ({
  payload: {
    block1,
  },
}));
const setBlock2 = createAction(ActionType.SetBlock2, (block2) => ({
  payload: {
    block2,
  },
}));
const setBlock3 = createAction(ActionType.SetBlock3, (block3) => ({
  payload: {
    block3,
  },
}));

export { setBlock1, setBlock2, setBlock3 };
