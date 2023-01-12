import { BLOCKS } from "../../const";
import BlockButtons from "../block-buttons/block-buttons";
import BlockItem from "../block-item/block-item";

function BlocksList(): JSX.Element {
  return (
    <div>
      <BlockButtons blocks={BLOCKS} />
      {BLOCKS.map((block) => (
        <BlockItem key={block.id} block={block} />
      ))}
    </div>
  );
}

export default BlocksList;
