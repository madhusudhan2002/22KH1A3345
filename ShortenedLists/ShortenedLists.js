import React from 'react';

function ShortenedList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.shortId}>
          <strong>{item.shortId}</strong>: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
        </li>
      ))}
    </ul>
  );
}

export default ShortenedList;
