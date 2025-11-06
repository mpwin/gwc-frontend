import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Collection } from './Collection.jsx';
import './Zone.css';

export function Zone() {
  const { zoneSlug } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/api/zones/${zoneSlug}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [zoneSlug]);

  return (
    <div className="zone">
      <h1>{data.name}</h1>

      <div className="collections">
        <div className="achievement_collections">
          {data.achievement_collections?.map(collection => (
            <Collection collection={collection} />
          ))}
        </div>

        <div className="skin_collections">
          {data.skin_collections?.map(collection => (
            <Collection collection={collection} />
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
