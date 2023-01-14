import { createAction } from "@reduxjs/toolkit";
import { ActionType} from "../types/block-data";

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

const setFieldStatus = createAction(
  ActionType.SetFieldStatus,
  (blockName, fieldName, status) => ({
    payload: {
      blockName,
      fieldName,
      status,
    },
  })
);

const setIsConnectionLost = createAction(
  ActionType.SetIsConnectionLost,
  (isConnectionLost: boolean) => ({
    payload: {
      isConnectionLost,
    },
  })
);

export { setBlockData, setIsConnectionLost, setBlockStatus, setFieldStatus };
