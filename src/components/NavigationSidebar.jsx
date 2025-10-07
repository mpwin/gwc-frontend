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
      <ul className="releases">
        {navData.map(release => (
          <>
            <li key={release.slug}>
              <a>
                {release.name}
              </a>
            </li>
            <ul className="zones">
              {release.zones.map(zone => (
                <li key={zone.slug}>
                  <Link to={`/${release.slug}/${zone.slug}`}>
                    {zone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </nav>
  );
}
