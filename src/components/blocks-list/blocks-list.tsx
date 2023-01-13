import { useEffect, useState } from "react";
import { useBlockApi } from "../../hooks/useBlockApi";
import BlockButtons from "../block-buttons/block-buttons";
import Block1 from "../block1/block1";
import Block2 from "../block2/block2";
import Block3 from "../block3/block3";

function BlocksList(): JSX.Element {
  const [showBlocks, setShowBlocks] = useState<string[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBlockApi();
  }, []);

  const handleBlockButtonClick = (id: string) => {
    if (!showBlocks.includes(id)) {
      setShowBlocks([...showBlocks, id]);
    } else {
      setShowBlocks(showBlocks.filter((item) => item !== id));
    }
  };

  return (
    <>
      <BlockButtons
        showBlocks={showBlocks}
        handleBlockButtonClick={handleBlockButtonClick}
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
