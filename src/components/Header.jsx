import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header>
      <Link to="/" className="home-link">Gron's Guild Wars Catalog</Link>
    </header>
  );
}
