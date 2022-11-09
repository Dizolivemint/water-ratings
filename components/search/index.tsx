import { useState } from 'react';

type ResultType = {
  id: string;
  title: string;
};

export const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<ResultType[]>([]);

  const searchResults = async () => {
    const response = await fetch(`/api/search?q=${search}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchResults}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};