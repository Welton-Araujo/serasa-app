import React from 'react';
import styled from 'styled-components';
import Post from './Post';

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
  background: #fff;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Container>
      {author.posts.length > 0 && (
        <div>
          {author.posts.map(post => (
            <Post key={post.id}
                 title={post.title}
                    content={post.content}
                    date={ post.createdAt } 
                    author={{ name: author.name }} />
          ))}
        </div>
      )}
      
    </Container>
  );
};

export default Author;
