import { useState, useEffect } from 'react';
import { Collection } from './Collection.jsx';
import './Zone.css';

export function Zone({ slug }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/api/zones/${slug}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [slug]);

  return (
    <div className="zone">
      <h2>{data.name}</h2>

      <div className="collections">
        <div className="achievement_collections">
          {data.achievement_collections?.map(collection => (
            <Collection collection={collection} />
          ))}
        </div>

        <div className="skin_collections">
          {data.skin_collections?.map(collection => (
            <>
              <div>{collection.name}</div>
              <ul>
                {collection.skins.map(skin => (
                  <li>{skin.name}</li>
                ))}
              </ul>
            </>
          ))}
        </div>

        <div className="misc_collections">
          {data.misc_collections?.map(collection => (
            <>
              <div>{collection.name}</div>
              <ul>
                {collection.items.map(item => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
