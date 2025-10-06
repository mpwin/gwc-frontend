import { Achievement } from './Achievement.jsx';

export function Collection({ collection }) {
  return (
    <div className="collection">
      <div className="collection-name">{collection.name}</div>
      <ul>
        {collection.achievements.map(achievement => (
          <Achievement achievement={achievement} />
        ))}
      </ul>
    </div>
  );
}
