import { BlockComponentProps } from "../../hoc/whithFocusBlurHandlers";
import { useAppSelector } from "../../hooks/useAppSelector";

function Block1({ isShow, onBlur, onFocus }: BlockComponentProps): JSX.Element {
  const { data, status } = useAppSelector((state) => state.blockReducer.block1);

  return (
    <>
      {isShow && (
        <form className="block-form">
          <h2 className="block-form-title">Блок 1</h2>
          <label
            className={
              status.fname
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            Имя
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите имя`}
              name="fname"
              id="fname"
              defaultValue={data.fname}
              readOnly={status.fname}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>

          <label
            className={
              status.lname
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            Фамилия
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите фамилию`}
              name="lname"
              id="lname"
              defaultValue={data.lname}
              readOnly={status.lname}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block1;
