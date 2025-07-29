import React from 'react';

function Analytics({ analytics }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Short ID</th>
          <th>Original URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(analytics).map(([shortId, data]) => (
          <tr key={shortId}>
            <td>{shortId}</td>
            <td>{data.originalUrl}</td>
            <td>{data.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Analytics;
