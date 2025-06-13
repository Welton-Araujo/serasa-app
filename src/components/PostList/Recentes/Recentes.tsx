import React from 'react';
import News from '../News/News';
import { Container } from './Recentes.styles';

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
