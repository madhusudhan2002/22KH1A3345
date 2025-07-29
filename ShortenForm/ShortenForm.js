import React, { useState } from 'react';
import { isValidUrl } from '../utils/validators';
import { shortenUrl } from '../api/urlService';
import logger from '../logging/loggerMiddleware';

function ShortenForm({ onShortened }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      setError('Invalid URL!');
      logger('Validation error', { url });
      return;
    }
    setError('');
    const result = shortenUrl(url);
    onShortened(result.shortId, url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste your URL here"
      />
      <button type="submit">Shorten</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default ShortenForm;
