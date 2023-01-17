import { BlockComponentProps } from "../../hoc/withFocusBlurHandlers";
import { useAppSelector } from "../../hooks/useAppSelector";

function Block3({ isShow, onBlur, onFocus }: BlockComponentProps): JSX.Element {
  const { data, status } = useAppSelector((state) => state.blockReducer.block3);

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
            Город
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите город`}
              name="city"
              id="city"
              defaultValue={data.city}
              readOnly={status.city}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>

          <label
            className={
              status.address
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            Улица
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите улицу`}
              name="address"
              id="address"
              defaultValue={data.address}
              readOnly={status.address}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>

          <label
            className={
              status.index
                ? "block-form-label block-form-label-error"
                : "block-form-label"
            }
          >
            Почтовый индекс
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите почтовый индекс`}
              name="index"
              id="index"
              defaultValue={data.index}
              readOnly={status.index}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block3;
