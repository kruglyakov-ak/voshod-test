import { useEffect, FocusEvent } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  changeBlurStatus,
  changeFocusStatus,
  startBlockListening,
  stopBlockListening,
} from "../../store/reducers/block";
import { BlockNames } from "../../types/block-data";

type BlockProps = {
  showBlocks: string[];
};

function Block2({ showBlocks }: BlockProps): JSX.Element {
  const isShow = showBlocks.includes(BlockNames.Block2);
  const { data, status } = useAppSelector((state) => state.blockReducer.block2);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isShow) {
      dispatch(startBlockListening(BlockNames.Block2));
    }
    return () => {
      dispatch(stopBlockListening(BlockNames.Block2));
    };
  }, [dispatch, isShow]);

  const focusHandler = ({ currentTarget }: FocusEvent<HTMLInputElement>) => {
    dispatch(changeFocusStatus(BlockNames.Block2, currentTarget.id));
  };

  const blurHandler = ({ currentTarget }: FocusEvent<HTMLInputElement>) => {
    dispatch(changeBlurStatus(BlockNames.Block2, currentTarget.id));
  };

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
              defaultValue={data.birthday}
              readOnly={status.birthday}
              onFocus={focusHandler}
              onBlur={blurHandler}
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
              defaultValue={data.height}
              readOnly={status.height}
              onFocus={focusHandler}
              onBlur={blurHandler}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block2;
