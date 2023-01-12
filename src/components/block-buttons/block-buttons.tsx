import { BlockNames } from "../../types/block-data";

type BlockButtonsProps = {
  showBlocks: string[];
  handleBlockButtonClick: (id: string) => void;
};

function BlockButtons({
  handleBlockButtonClick,
  showBlocks,
}: BlockButtonsProps): JSX.Element {
  return (
    <div className="block-button-wrapper">
      <button
        className={
          showBlocks.includes(BlockNames.Block1)
            ? "button block-button button--active"
            : "button block-button"
        }
        type="button"
        onClick={() => handleBlockButtonClick(BlockNames.Block1)}
      >
        Блок 1
      </button>

      <button
        className={
          showBlocks.includes(BlockNames.Block2)
            ? "button block-button button--active"
            : "button block-button"
        }
        type="button"
        onClick={() => handleBlockButtonClick(BlockNames.Block2)}
      >
        Блок 2
      </button>

      <button
        className={
          showBlocks.includes(BlockNames.Block3)
            ? "button block-button button--active"
            : "button block-button"
        }
        type="button"
        onClick={() => handleBlockButtonClick(BlockNames.Block3)}
      >
        Блок 3
      </button>
    </div>
  );
}

export default BlockButtons;
