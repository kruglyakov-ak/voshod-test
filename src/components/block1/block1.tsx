import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { startBlockListening, stopBlockListening } from "../../store/reducers/block";
import { BlockNames } from "../../types/block-data";

type BlockProps = {
  showBlocks: string[];
};

function Block1({ showBlocks }: BlockProps): JSX.Element {
  const isShow = showBlocks.includes(BlockNames.Block1);
  const block1 = useAppSelector((state) => state.blockReducer.block1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isShow) {
      dispatch(startBlockListening(BlockNames.Block1))
    }
    return () => {
      dispatch(stopBlockListening(BlockNames.Block1))
    }
  }, [dispatch, isShow]);

  return (
    <>
      {isShow && (
        <form className="block-form">
          <h2 className="block-form-title">Блок 1</h2>
          <label className="block-form-label">
            Имя
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите имя`}
              name="fname"
              id="fname"
              defaultValue={block1.fname}
            />
          </label>

          <label className="block-form-label">
            Фамилия
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите фамилию`}
              name="lname"
              id="lname"
              defaultValue={block1.lname}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block1;
