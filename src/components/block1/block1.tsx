import { useAppSelector } from "../../hooks/useAppSelector";
import { BlockNames } from "../../types/block-data";

type BlockProps = {
  showBlocks: string[];
};

function Block1({ showBlocks }: BlockProps): JSX.Element {
  const isShow = showBlocks.includes(BlockNames.Block1);
  const block1 = useAppSelector((state) => state.blockData.block1);

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
