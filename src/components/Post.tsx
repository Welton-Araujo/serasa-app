import React from 'react';
import styled from 'styled-components';

interface PostProps {
  post: {
    title: string;
    content: string;
    published: boolean;
  };
}

const PostContainer = styled.div`
  background: #f1f1f1;
  padding: 0.8rem;
  border-radius: 6px;
  margin: 0.5rem 0;
`;

const Title = styled.h5`
  margin: 0;
`;

const Content = styled.p`
  font-size: 0.9rem;
  color: #444;
`;

const Badge = styled.span<{ published: boolean }>`
  display: inline-block;
  background-color: ${({ published }) => (published ? '#4caf50' : '#f44336')};
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-bottom: 0.3rem;
`;

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <PostContainer>
      <Badge published={post.published}>
        {post.published ? 'Publicado' : 'Rascunho'}
      </Badge>
      <Title>{post.title}</Title>
      <Content>{post.content.slice(0, 150)}...</Content>
    </PostContainer>
  );
};

export default Post;
