import React from 'react';
import Counter from './components/useeffect';
// Demo: Custom Hook for Data Fetching
import DataFetcher from './components/fetch';
function App() {
  return (
    <div className="App">
      React useEffect Hook Example
      <Counter />
      <DataFetcher url="https://jsonplaceholder.typicode.com/posts" />

    </div>
  );
}

export default App;