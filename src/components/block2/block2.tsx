import { BlockComponentProps } from "../../hoc/whithFocusBlurHandlers";
import { useAppSelector } from "../../hooks/useAppSelector";

function Block2({ isShow, onBlur, onFocus }: BlockComponentProps): JSX.Element {
  const { data, status } = useAppSelector((state) => state.blockReducer.block2);

  return (
    <>
      {isShow && (
        <form className="block-form">
          <h2 className="block-form-title">Блок 2</h2>
          <label
            className={
              status.birthday
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            Дата рождения
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите дату рождения`}
              name="birthday"
              id="birthday"
              defaultValue={data.birthday}
              readOnly={status.birthday}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>

          <label
            className={
              status.height
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            Рост
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите рост`}
              name="height"
              id="height"
              defaultValue={data.height}
              readOnly={status.height}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block2;
