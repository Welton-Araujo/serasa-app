import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Author from './Author';

interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
}

interface AuthorData {
  id: number;
  name: string;
  email: string;
  bio: string | null;
  posts: Post[];
}

const AuthorList: React.FC = () => {
  const [authors, setAuthors] = useState<AuthorData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/authors?page=1&limit=10')
      .then(res => {
        setAuthors(res.data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando autores...</p>;

  return (
    <div>
      {authors.map(author => (
        <Author key={author.id} author={author} />
      ))}
    </div>
  );
};

export default AuthorList;
