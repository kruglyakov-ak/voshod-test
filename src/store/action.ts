import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../types/block-data";

const setBlock = createAction(ActionType.SetBlock, (block) => ({
  payload: {
    block,
  },
}));

export { setBlock };
