import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Recentes from './Recentes';

interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: {
    id: number;
    name: string;
    email: string;
    bio: string | null;
  };
}

interface PostsResponse {
  data: Post[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledSelect = styled.select`
  background-color: #d1fae5; /* verde claro */
  color: #059669; /* verde */
  font-weight: 600;
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  appearance: none;
  cursor: pointer;
`;

const DropdownArrow = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #059669;
  pointer-events: none;
`;

const Heading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  margin-bottom: 1rem;
`;

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<PostsResponse>('http://localhost:3000/api/posts?page=1&limit=5')
      .then(res => {
        setPosts(res.data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando posts...</p>;

  return (
    <div>
      <Heading>Últimas notícias</Heading>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Recentes 
            key={post.id} 
            post={post}
            author={post.author}
          />
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
};

export default PostsList;