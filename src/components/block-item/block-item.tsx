import { Block } from "../../types/block";

type BlockProps = {
  block: Block;
  showBlocks: string[];
};

function BlockItem({ block, showBlocks }: BlockProps): JSX.Element {
  const isShow = showBlocks.includes(block.id);

  return (
    <>
      {isShow && (
        <form className="block-form">
          <h2 className="block-form-title">{block.name}</h2>

          {block.fields.map((field) => {
            return (
              <label key={field.id} className="block-form-label">
                {field.title}

                <input
                  className="block-form-input"
                  type="text"
                  placeholder={`Введите ${field.title.toLowerCase()}`}
                  name={field.id}
                  id={field.id}
                />
              </label>
            );
          })}
        </form>
      )}
    </>
  );
}

export default BlockItem;
