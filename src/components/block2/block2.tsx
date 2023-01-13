import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { startBlockListening, stopBlockListening } from "../../store/reducers/block";
import { BlockNames } from "../../types/block-data";

type BlockProps = {
  showBlocks: string[];
};

function Block2({ showBlocks }: BlockProps): JSX.Element {
  const isShow = showBlocks.includes(BlockNames.Block2);
  const block2 = useAppSelector((state) => state.blockReducer.block2);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isShow) {
      dispatch(startBlockListening(BlockNames.Block2))
    }
    return () => {
      dispatch(stopBlockListening(BlockNames.Block2))
    }
  }, [dispatch, isShow]);

  return (
    <>
      {isShow && (
        <form className="block-form">
          <h2 className="block-form-title">Блок 2</h2>
          <label className="block-form-label">
            Дата рождения
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите дату рождения`}
              name="birthday"
              id="birthday"
              defaultValue={block2.birthday}
            />
          </label>

          <label className="block-form-label">
            Рост
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите рост`}
              name="height"
              id="height"
              defaultValue={block2.height}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block2;
