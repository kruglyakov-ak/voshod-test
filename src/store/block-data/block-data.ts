import { createReducer } from "@reduxjs/toolkit";
import { BlockData } from "../../types/block-data";
import { setBlock1, setBlock2, setBlock3 } from "../action";

const initialState: BlockData = {
  block1: { fname: "", lname: "" },
  block2: { birthday: "", height: "" },
  block3: { address: "", city: "", index: "" },
};

const blockData = createReducer(initialState, (builder) => {
  builder
    .addCase(setBlock1, (state, action) => {
      const { block1 } = action.payload;
      state.block1 = block1;
    })
    .addCase(setBlock2, (state, action) => {
      const { block2 } = action.payload;
      state.block1 = block2;
    })
    .addCase(setBlock3, (state, action) => {
      const { block3 } = action.payload;
      state.block1 = block3;
    });
});

export { blockData };
