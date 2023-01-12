import { Block } from "../../types/block";

type BlockProps = {
  block: Block;
};

function BlockItem({ block }: BlockProps): JSX.Element {
  return (
    <div>
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
    </div>
  );
}

export default BlockItem;
