import { Achievement } from './Achievement.jsx';
import { Skin } from './Skin.jsx';

const ITEM_COMPONENTS = {
  achievement: Achievement,
  skin: Skin,
};

export function Collection({ collection }) {
  return (
    <div className="collection">
      <div className="collection-name">{collection.name}</div>
      <ul>
        {collection.items.map(item => {
          const itemType = item.type || collection.type;
          const ItemComponent = ITEM_COMPONENTS[itemType];

          return (
            <ItemComponent
              key={`${itemType}-${item.id}`}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
}
