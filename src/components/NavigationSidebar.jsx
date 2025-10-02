import { useState, useEffect } from 'react';
import './NavigationSidebar.css';

export function NavigationSidebar({ setView }) {
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
            <li key={release.slug}>
              <button onClick={() => setView({ type: 'release', slug: release.slug })}>
                {release.name}
              </button>
            </li>
            <ul className="zones">
              {release.zones.map(zone => (
                <li key={zone.slug}>
                  <button onClick={() => setView({ type: 'zone', slug: zone.slug })}>
                    {zone.name}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </nav>
  );
}
