import { useState, useEffect } from 'react';

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
    </div>
  );
}
