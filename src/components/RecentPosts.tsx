import React from 'react';
import styled from 'styled-components';
import { FiTwitter, FiLinkedin, FiLink } from 'react-icons/fi';

interface PostCardProps {
  title: string;
  content: string;
  date: string;
  author: {
    name: string;
  };
}

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const AuthorName = styled.p`
  color: #e91e63;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const DateText = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0.2rem 0 1.2rem;
`;

const Title = styled.h2`
  margin: 0 0 1rem;
`;

const Content = styled.p`
  line-height: 1.6;
  color: #444;
`;

const Icons = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  gap: 0.8rem;

  svg {
    color: #777;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: #000;
    }
  }
`;

const PostCard: React.FC<PostCardProps> = ({ title, content, date, author }) => {
    
  return (
    <Card>
      <Title>{title}</Title>
      <DateText>{new Date(date).toLocaleDateString('pt-BR')}</DateText>
    </Card>
  );
};

export default PostCard;
