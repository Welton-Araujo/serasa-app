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
  border: 1px solid #CDCDDF;  
  border-radius: 4px;
  padding: 16px;
  position: relative;
  background: transparent;    
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  margin: 0 0 0.5rem;
`;


const DateText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  color: #E04C85;
  margin: 0;
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
