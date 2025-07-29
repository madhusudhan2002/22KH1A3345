import React, { useState } from 'react';
import ShortenForm from './components/ShortenForm';
import ShortenedList from './components/ShortenedList';
import Analytics from './components/Analytics';
import { getAnalytics } from './api/urlService';

function App() {
  const [shortened, setShortened] = useState([]);
  const [analytics, setAnalytics] = useState(getAnalytics());

  const handleShortened = (shortId, url) => {
    setShortened([...shortened, { shortId, url }]);
    setAnalytics(getAnalytics());
  };

  return (
    <div>
      <h1>React URL Shortener App</h1>
      <ShortenForm onShortened={handleShortened} />
      <h2>Shortened URLs</h2>
      <ShortenedList items={shortened} />
      <h2>Analytics</h2>
      <Analytics analytics={analytics} />
    </div>
  );
}

export default App;
