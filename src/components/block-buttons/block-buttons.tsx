import { Block } from "../../types/block";

type BlockButtonsProps = {
  blocks: Block[];
  handleBlockButtonClick: (id: number) => void;
};

function BlockButtons({
  blocks,
  handleBlockButtonClick,
}: BlockButtonsProps): JSX.Element {
  return (
    <div>
      {blocks.map((block) => (
        <button
          type="button"
          key={block.id}
          onClick={() => handleBlockButtonClick(block.id)}
        >
          {block.name}
        </button>
      ))}
    </div>
  );
}

export default BlockButtons;
