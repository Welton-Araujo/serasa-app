import React from 'react';
import styled from 'styled-components';

interface PostCardProps {
  title: string;
  content: string;
  date: string;
  author: {
    name: string;
  };
}

const Card = styled.div`
  border: 1px solid #a0a0b0;  /* borda leve cinza */
  border-radius: 4px;
  padding: 1rem;
  position: relative;
  background: transparent;     /* sem fundo */
`;

const Title = styled.h2`
  margin: 0 0 0.5rem;            // menos espaço abaixo do título
`;

const DateText = styled.p`
  font-size: 0.85rem;
   color: #e91e63;
  margin: 0;                     // remove margens extras
`;


const PostCard: React.FC<PostCardProps> = ({ title, date }) => {

  return (
    <Card>
      <Title>{title}</Title>
      <DateText>{new Date(date).toLocaleDateString('pt-BR')}</DateText>
    </Card>
  );
};

export default PostCard;
