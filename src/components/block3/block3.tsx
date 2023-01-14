import { useEffect, FocusEvent } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  sendBlurStatus,
  sendFocusStatus,
  startBlockListening,
  stopBlockListening,
} from "../../store/reducers/block";
import { BlockNames } from "../../types/block-data";

type BlockProps = {
  showBlocks: string[];
};

function Block3({ showBlocks }: BlockProps): JSX.Element {
  const isShow = showBlocks.includes(BlockNames.Block3);
  const { data, status } = useAppSelector((state) => state.blockReducer.block3);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isShow) {
      dispatch(startBlockListening(BlockNames.Block3));
    }
    return () => {
      dispatch(stopBlockListening(BlockNames.Block3));
    };
  }, [dispatch, isShow]);

  const focusHandler = ({ currentTarget }: FocusEvent<HTMLInputElement>) => {
    dispatch(sendFocusStatus(BlockNames.Block3, currentTarget.id));
  };

  const blurHandler = ({ currentTarget }: FocusEvent<HTMLInputElement>) => {
    dispatch(sendBlurStatus(BlockNames.Block3, currentTarget.id));
  };

  return (
    <>
      {isShow && (
        <form className="block-form">
          <h2 className="block-form-title">Блок 3</h2>
          <label
            className={
              status.city
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            {" "}
            Город
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите город`}
              name="city"
              id="city"
              defaultValue={data.city}
              readOnly={status.city}
              onFocus={focusHandler}
              onBlur={blurHandler}
            />
          </label>

          <label
            className={
              status.address
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            {" "}
            Улица
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите улицу`}
              name="address"
              id="address"
              defaultValue={data.address}
              readOnly={status.address}
              onFocus={focusHandler}
              onBlur={blurHandler}
            />
          </label>

          <label
            className={
              status.index
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            {" "}
            Почтовый индекс
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите почтовый индекс`}
              name="index"
              id="index"
              defaultValue={data.index}
              readOnly={status.index}
              onFocus={focusHandler}
              onBlur={blurHandler}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block3;
