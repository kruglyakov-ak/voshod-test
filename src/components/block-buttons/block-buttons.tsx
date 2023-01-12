import { Block } from "../../types/block";

type BlockButtonsProps = {
  blocks: Block[];
};

function BlockButtons({ blocks }: BlockButtonsProps): JSX.Element {
  return (
    <div>
      {blocks.map((block) => (
        <button type="button" key={block.id}>
          {block.name}
        </button>
      ))}
    </div>
  );
}

export default BlockButtons;
