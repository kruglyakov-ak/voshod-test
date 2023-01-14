import { createReducer } from "@reduxjs/toolkit";
import { blockAPI, BlockData, SubscribersType } from "../../services/block-api";
import { BlockNames } from "../../types/block-data";
import {
  setBlockData,
  setIsButtonDisabled,
  setBlockStatus,
  setFieldStatus,
} from "../action";
import { AppDispatch } from "../store";

const initialState: BlockData = {
  block1: {
    data: { fname: "", lname: "" },
    status: { fname: false, lname: false },
  },
  block2: {
    data: { birthday: "", height: "" },
    status: { birthday: false, height: false },
  },
  block3: {
    data: { address: "", city: "", index: "" },
    status: { address: false, city: false, index: false },
  },
  isButtonsDisabled: true,
};

const blockReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setBlockData, (state, action) => {
      const { block } = action.payload;
      state[block.blockName as BlockNames].data = block.block.data;
    })
    .addCase(setBlockStatus, (state, action) => {
      const { block } = action.payload;
      state[block.blockName as BlockNames].status = block.block.status;
    })
    .addCase(setFieldStatus, (state: any, action) => {
      const { blockName, fieldName, status } = action.payload;
      state[blockName as BlockNames] =  state[blockName as BlockNames]
      state[blockName].status[fieldName] = status;
    })
    .addCase(setIsButtonDisabled, (state, action) => {
      state.isButtonsDisabled = action.payload.isButtonDisabled;
    });
});

let _blockDataHandler: SubscribersType | null = null;
const newBlockDataCreator = (dispatch: AppDispatch) => {
  if (_blockDataHandler === null) {
    _blockDataHandler = (block, blockName: BlockNames, fieldName, status) => {
      if (fieldName && !block) {
        dispatch(setFieldStatus(blockName, fieldName, status));
      } else {
        dispatch(setBlockData({ block, blockName }));
        dispatch(setBlockStatus({ block, blockName }));
      }
    };
  }
  return _blockDataHandler;
};

export const openChanel = () => (dispatch: AppDispatch) => {
  blockAPI.start((status) => dispatch(setIsButtonDisabled(status)));
};

export const startBlockListening =
  (blockName: BlockNames) => (dispatch: AppDispatch) => {
    blockAPI.subscribe(blockName, newBlockDataCreator(dispatch));
  };

export const stopBlockListening =
  (blockName: BlockNames) => (dispatch: AppDispatch) => {
    blockAPI.unsubscribe(blockName, newBlockDataCreator(dispatch));
  };

export const sendFocusStatus =
  (blockName: BlockNames, nameField: string) => () => {
    blockAPI.focusField(blockName, nameField);
  };

export const sendBlurStatus =
  (blockName: BlockNames, nameField: string) => () => {
    blockAPI.blurField(blockName, nameField);
  };

export { blockReducer };
