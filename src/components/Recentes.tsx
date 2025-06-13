import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import News from './News';

interface PostType {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
}

interface AuthorType {
  id: number;
  name: string;
  email: string;
  bio: string | null;
}

interface RecentesProps {
  post: PostType;
  author: AuthorType;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  border-radius: 8px;
  gap: 4px;
`;

const Name = styled.h2`
  margin: 0;
`;

const Email = styled.p`
  margin: 0.2rem 0;
  color: #555;
`;

const Bio = styled.p`
  font-style: italic;
  color: #666;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px; 
`;

const Recentes: React.FC<RecentesProps> = ({ post, author }) => {
  return (
    <Container>
      <News
        key={post.id}
        title={post.title}
        content={post.content}
        date={post.createdAt}
      />
    </Container>
  );
};

export default Recentes;