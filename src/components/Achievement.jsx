export function Achievement({ achievement }) {
  return (
    <li className="achievement">
      <div className="achievement-name">{achievement.name}</div>
    </li>
  );
}
