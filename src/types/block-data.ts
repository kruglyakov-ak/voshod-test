export enum BlockNames {
  Block1 = "block1",
  Block2 = "block2",
  Block3 = "block3",
}

export type BlockData = {
  [BlockNames.Block1]: { lname: string; fname: string };
  [BlockNames.Block2]: { birthday: string; height: string };
  [BlockNames.Block3]: { city: string; address: string; index: string };
};

export enum ActionType {
  SetBlock1 = "data/setBlock1",
  SetBlock2 = "data/setBlock2",
  SetBlock3 = "data/setBlock3",
}
