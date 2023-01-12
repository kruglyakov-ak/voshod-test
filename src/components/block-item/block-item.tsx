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
        <form action="">
          <fieldset>
            <h2>{block.name}</h2>

            {block.fields.map((field) => {
              return (
                <label key={field.id}>
                  {field.title}

                  <input
                    type="text"
                    placeholder={`Введите ${field.title.toLowerCase()}`}
                    name={field.id}
                    id={field.id}
                  />
                </label>
              );
            })}
          </fieldset>
        </form>
      )}
    </>
  );
}

export default BlockItem;
