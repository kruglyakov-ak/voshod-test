import { createReducer } from "@reduxjs/toolkit";
import { blockAPI, BlockData, SubscribersType } from "../../services/block-api";
import { BlockNames } from "../../types/block-data";
import { setBlock, setIsButtonDisabled } from "../action";
import { AppDispatch } from "../store";

const initialState: BlockData = {
  block1: { fname: "", lname: "" },
  block2: { birthday: "", height: "" },
  block3: { address: "", city: "", index: "" },
  isButtonsDisabled: true,
};

const blockReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setBlock, (state, action) => {
      const { block } = action.payload;
      state[block.blockName as BlockNames] = block.block;
    })
    .addCase(setIsButtonDisabled, (state, action) => {
      state.isButtonsDisabled = action.payload.isButtonDisabled;
    });
});

let _blockDataHandler: SubscribersType | null = null;
const newBlockDataCreator = (dispatch: AppDispatch) => {
  if (_blockDataHandler === null) {
    _blockDataHandler = (block, blockName: BlockNames) => {
      dispatch(setBlock({ block, blockName }));
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

export { blockReducer };
