import { BlockNames } from "../types/block-data";

let subscribers: SubscribersType[] = [];
let connectionStatusSubscriber: ConnectionStatusSubscriber;
let ws: WebSocket | null = null;

const closeHandler = () => {
  connectionStatusSubscriber(true);
  setTimeout(createChanel, 5000);
};

const openHandler = () => {
  connectionStatusSubscriber(false);
};

const subscribeBlockHandler = (e: MessageEvent) => {
  const currentBlockName: BlockNames = JSON.parse(e.data).block;
  if (JSON.parse(e.data).data) {
    const newBlock = {
      data: JSON.parse(e.data).data,
      status: JSON.parse(e.data).status,
    };
    subscribers.forEach((subscriber) => {
      subscriber(newBlock, currentBlockName);
    });
  } else if (JSON.parse(e.data).focus) {
    const currentFieldName = JSON.parse(e.data).focus;
    subscribers.forEach((subscriber) => {
      subscriber(null, currentBlockName, currentFieldName, true);
    });
  } else if (JSON.parse(e.data).blur) {
    const currentFieldName = JSON.parse(e.data).blur;
    subscribers.forEach((subscriber) => {
      subscriber(null, currentBlockName, currentFieldName, false);
    });
  }
};

function createChanel() {
  ws?.removeEventListener("close", closeHandler);
  ws?.close();
  ws = new WebSocket("wss://taxivoshod.ru:8999");
  ws.addEventListener("open", openHandler);
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", subscribeBlockHandler);
}

export const blockAPI = {
  start(callback: ConnectionStatusSubscriber) {
    connectionStatusSubscriber = callback;
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
  focusField(blockName: BlockNames, fieldName: string) {
    ws?.send(
      JSON.stringify({ command: "focus", block: blockName, field: fieldName })
    );
  },
  blurField(blockName: BlockNames, fieldName: string) {
    ws?.send(
      JSON.stringify({ command: "blur", block: blockName, field: fieldName })
    );
  },
};

export type SubscribersType = (
  { data, status }: any,
  blockName: BlockNames,
  fieldName?: string,
  fieldStatus?: boolean
) => void;

export type ConnectionStatusSubscriber = (status: boolean) => void;

export type BlockData = {
  [BlockNames.Block1]: {
    data: { lname: string; fname: string };
    status: { fname: boolean; lname: boolean };
  };
  [BlockNames.Block2]: {
    data: { birthday: string; height: string };
    status: { birthday: boolean; height: boolean };
  };
  [BlockNames.Block3]: {
    data: { city: string; address: string; index: string };
    status: { address: boolean; city: boolean; index: boolean };
  };
  isConnectionLost: boolean;
};
