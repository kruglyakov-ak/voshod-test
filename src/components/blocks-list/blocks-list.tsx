import { useState } from "react";
import { BLOCKS } from "../../const";
import BlockButtons from "../block-buttons/block-buttons";
import BlockItem from "../block-item/block-item";

function BlocksList(): JSX.Element {
  const [showBlocks, setShowBlocks] = useState<string[]>([]);

  const handleBlockButtonClick = (id: string) => {
    if (!showBlocks.includes(id)) {
      setShowBlocks([...showBlocks, id]);
    } else {
      setShowBlocks(showBlocks.filter((item) => item !== id));
    }
  };

  return (
    <div>
      <BlockButtons
        blocks={BLOCKS}
        handleBlockButtonClick={handleBlockButtonClick}
      />
      {BLOCKS.map((block) => (
        <BlockItem key={block.id} block={block} showBlocks={showBlocks} />
      ))}
    </div>
  );
}

export default BlocksList;
