import { Block } from "../../types/block";

type BlockButtonsProps = {
  blocks: Block[];
  showBlocks: string[];
  handleBlockButtonClick: (id: string) => void;
};

function BlockButtons({
  blocks,
  handleBlockButtonClick,
  showBlocks,
}: BlockButtonsProps): JSX.Element {
  return (
    <div className="block-button-wrapper">
      {blocks.map((block) => (
        <button
          className={
            showBlocks.includes(block.id) ? "button block-button button--active" : "button block-button"
          }
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
