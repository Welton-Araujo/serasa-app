import React from 'react';
import AuthorList from './components/AuthorList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Autores do Blog</h1>
      <AuthorList />
    </div>
  );
};

export default App;
