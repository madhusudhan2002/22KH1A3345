// In src/routes.js or directly in App.js, using react-router-dom
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from 'react-router-dom';
import { getOriginalUrl } from './api/urlService';

function Redirect() {
  const { shortId } = useParams();
  const destUrl = getOriginalUrl(shortId);
  if (destUrl) return <Navigate to={destUrl} />;
  return <div>URL Not Found!</div>;
}

// In App.js render section:
<Router>
  <Routes>
    <Route path="/" element={<AppHome />} />
    <Route path="/:shortId" element={<Redirect />} />
  </Routes>
</Router>
