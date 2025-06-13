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

interface AuthorProps {
  author: {
    name: string;
    email: string;
    bio: string | null;
    posts: PostType[];
  };
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

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Container>
      {author.posts.length > 0 && (
        <NewsList>
          {author.posts.map(post => (
            <News key={post.id}
                 title={post.title}
                    content={post.content}
                    date={ post.createdAt } 
                    author={{ name: author.name }} />
          ))}
        </NewsList>
      )}
      
    </Container>
  );
};

export default Author;
