import { useAppSelector } from "../../hooks/useAppSelector";
import { BlockNames } from "../../types/block-data";

type BlockProps = {
  showBlocks: string[];
};

function Block3({ showBlocks }: BlockProps): JSX.Element {
  const isShow = showBlocks.includes(BlockNames.Block3);
  const block3 = useAppSelector((state) => state.blockData.block3);

  return (
    <>
      {isShow && (
        <form className="block-form">
          <h2 className="block-form-title">Блок 3</h2>
          <label className="block-form-label">
            Город
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите город`}
              name="city"
              id="city"
              defaultValue={block3.city}
            />
          </label>

          <label className="block-form-label">
            Улица
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите улицу`}
              name="address"
              id="address"
              defaultValue={block3.address}
            />
          </label>

          <label className="block-form-label">
             Почтовый индекс
            <input
              className="block-form-input"
              type="text"
              placeholder={`Введите почтовый индекс`}
              name="index"
              id="index"
              defaultValue={block3.index}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Block3;
