import { BlockNames } from "../types/block-data";

let subscribers = [] as SubscribersType[];

let ws: WebSocket | null = null;

const closeHandler = () => {
  setTimeout(createChanel, 5000);
};

const subscribeBlockHandler = (e: MessageEvent) => {
  const newBlockData = JSON.parse(e.data).data;
  const currentBlockName = JSON.parse(e.data).block;
  subscribers.forEach((subscriber) => {
    subscriber(newBlockData, currentBlockName);
  });
};

function createChanel() {
  ws?.removeEventListener("close", closeHandler);
  ws?.close();
  ws = new WebSocket("wss://taxivoshod.ru:8999");
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", subscribeBlockHandler);
}

export const blockAPI = {
  start() {
    createChanel();
  },
  stop() {
    ws?.close();
  },
  subscribe(blockName: BlockNames, callback: SubscribersType) {
    subscribers.push(callback);
    ws?.send(JSON.stringify({ command: "subscribe", block: blockName }));
  },
  unsubscribe(blockName: BlockNames, callback: SubscribersType) {
    subscribers = subscribers.filter((subscriber) => subscriber !== callback);
    ws?.send(JSON.stringify({ command: "unsubscribe", block: blockName }));
  },
};

export type SubscribersType =
  | (({ block1 }: BlockData, blockName: BlockNames) => void)
  | (({ block2 }: BlockData, blockName: BlockNames) => void)
  | (({ block3 }: BlockData, blockName: BlockNames) => void);

export type BlockData = {
  [BlockNames.Block1]: { lname: string; fname: string };
  [BlockNames.Block2]: { birthday: string; height: string };
  [BlockNames.Block3]: { city: string; address: string; index: string };
};
