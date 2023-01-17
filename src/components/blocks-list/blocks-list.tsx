import { useEffect, useMemo, useState } from "react";
import whithFocusBlurHandlers from "../../hoc/whithFocusBlurHandlers";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { openChanel } from "../../store/reducers/block";
import { BlockNames } from "../../types/block-data";
import BlockButtons from "../block-buttons/block-buttons";
import Block1 from "../block1/block1";
import Block2 from "../block2/block2";
import Block3 from "../block3/block3";

function BlocksList(): JSX.Element {
  const [showBlocks, setShowBlocks] = useState<string[]>([]);
  const isConnectionLost = useAppSelector(
    (state) => state.blockReducer.isConnectionLost
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(openChanel());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isConnectionLost) {
      setShowBlocks([]);
    }
  }, [isConnectionLost]);

  const handleBlockButtonClick = (id: string) => {
    if (!showBlocks.includes(id)) {
      setShowBlocks([...showBlocks, id]);
    } else {
      setShowBlocks(showBlocks.filter((item) => item !== id));
    }
  };

  const Block1WhithFocusBlurHandlers = useMemo(
    () =>
      whithFocusBlurHandlers(Block1, BlockNames.Block1, showBlocks, dispatch),
    [dispatch, showBlocks]
  );
  const Block2WhithFocusBlurHandlers = useMemo(
    () =>
      whithFocusBlurHandlers(Block2, BlockNames.Block2, showBlocks, dispatch),
    [dispatch, showBlocks]
  );
  const Block3WhithFocusBlurHandlers = useMemo(
    () =>
      whithFocusBlurHandlers(Block3, BlockNames.Block3, showBlocks, dispatch),
    [dispatch, showBlocks]
  );

  return (
    <>
      <BlockButtons
        showBlocks={showBlocks}
        handleBlockButtonClick={handleBlockButtonClick}
      />
      <div className="block-forms-wrapper">
        <Block1WhithFocusBlurHandlers />
        <Block2WhithFocusBlurHandlers />
        <Block3WhithFocusBlurHandlers />
      </div>
    </>
  );
}

export default BlocksList;
