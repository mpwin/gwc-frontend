import './NavigationSidebar.css';

export default function NavigationSidebar() {
  return (
    <nav className="navigation-sidebar">
      <ul>
        <li><a>Heart of Thorns</a></li>
        <ul>
            <li><a>Verdant Brink</a></li>
            <li><a>Auric Basin</a></li>
            <li><a>Tangled Depths</a></li>
            <li><a>Dragon's Stand</a></li>
        </ul>
      </ul>
    </nav>
  );
}
