import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Collection } from './Collection.jsx';

export function Release() {
  const [data, setData] = useState({});
  const { releaseSlug } = useParams();

  useEffect(() => {
    fetch(`/api/releases/${releaseSlug}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [releaseSlug]);

  return (
    <div className="release">
      <h2>{data.name}</h2>

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
      </div>
    </div>
  );
}
