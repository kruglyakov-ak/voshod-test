import { useState, useEffect } from "react";
import BlockButtons from "../block-buttons/block-buttons";
import Block1 from "../block1/block1";
import Block2 from "../block2/block2";
import Block3 from "../block3/block3";

const ws = new WebSocket("wss://taxivoshod.ru:8999");

function BlocksList(): JSX.Element {
  const [showBlocks, setShowBlocks] = useState<string[]>([]);
  // const dispatch = useAppDispatch();

  const handleBlockButtonClick = (id: string) => {
    if (!showBlocks.includes(id)) {
      setShowBlocks([...showBlocks, id]);
      ws.send(JSON.stringify({ command: "subscribe", block: id }));
    } else {
      setShowBlocks(showBlocks.filter((item) => item !== id));
      ws.send(JSON.stringify({ command: "unsubscribe", block: id }));
    }
  };

  useEffect(() => {
console.log(showBlocks);

    // ws.addEventListener("message", (e) => {
    //   console.log(JSON.parse(e.data));

      // switch (JSON.parse(e.data).block) {
      //   case BlockNames.Block1:
      //     dispatch(setBlock1(JSON.parse(e.data).data));
      //     break;
      //   case BlockNames.Block2:
      //     dispatch(setBlock2(JSON.parse(e.data).data));
      //     break;
      //   case BlockNames.Block3:
      //     dispatch(setBlock3(JSON.parse(e.data).data));
      //     break;
      // }
    // });
  }, [showBlocks]);

  return (
    <>
      <BlockButtons
        handleBlockButtonClick={handleBlockButtonClick}
        showBlocks={showBlocks}
      />
      <div className="block-forms-wrapper">
        <Block1 showBlocks={showBlocks} />
        <Block2 showBlocks={showBlocks} />
        <Block3 showBlocks={showBlocks} />
      </div>
    </>
  );
}

export default BlocksList;
