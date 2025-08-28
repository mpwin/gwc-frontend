import { useState, useEffect } from 'react';
import './NavigationSidebar.css';

export default function NavigationSidebar() {
  const [navData, setNavData] = useState([]);
  useEffect(() => {
    fetch('/api/releases/')
      .then(response => response.json())
      .then(data => setNavData(data));
  }, []);

  return (
    <nav className="navigation-sidebar">
      <ul className="releases">
        {navData.map(release => (
          <>
            <li key={release.slug}>{release.name}</li>
            <ul className="zones">
              {release.zones.map(zone => (
                <li key={zone.slug}>{zone.name}</li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </nav>
  );
}
