import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavigationSidebar.css';

export function NavigationSidebar() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch('/api/releases/')
      .then(response => response.json())
      .then(data => setNavData(data));
  }, []);

  return (
    <nav className="navigation-sidebar">
      {navData.map(release => (
        <ul>
          <li key={release.slug} className="release">
            <Link to={`/${release.slug}`}>{release.name}</Link>
          </li>
          {release.zones.map(zone => (
            <li key={zone.slug} className="zone">
              <Link to={`/${release.slug}/${zone.slug}`}>{zone.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
