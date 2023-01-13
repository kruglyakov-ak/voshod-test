import { FocusEvent, useEffect } from "react";
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

function Block1({ showBlocks }: BlockProps): JSX.Element {
  const isShow = showBlocks.includes(BlockNames.Block1);
  const { data, status } = useAppSelector((state) => state.blockReducer.block1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isShow) {
      dispatch(startBlockListening(BlockNames.Block1));
    }
    return () => {
      dispatch(stopBlockListening(BlockNames.Block1));
    };
  }, [dispatch, isShow]);

  const focusHandler = ({ currentTarget }: FocusEvent<HTMLInputElement>) => {
    dispatch(changeFocusStatus(BlockNames.Block1, currentTarget.id))
  };

  const blurHandler = ({ currentTarget }: FocusEvent<HTMLInputElement>) => {
    dispatch(changeBlurStatus(BlockNames.Block1, currentTarget.id));
  };

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
              defaultValue={data.fname}
              readOnly={status.fname}
              onFocus={focusHandler}
              onBlur={blurHandler}
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
              defaultValue={data.lname}
              readOnly={status.lname}
              onFocus={focusHandler}
              onBlur={blurHandler}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block1;
