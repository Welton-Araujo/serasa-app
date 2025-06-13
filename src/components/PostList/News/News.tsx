import React from 'react';
import { Card, Title, DateText } from './News.styles';

interface NewsProps {
  title: string;
  content: string;
  date: string;
}

const News: React.FC<NewsProps> = ({ title, date }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <DateText>{new Date(date).toLocaleDateString('pt-BR')}</DateText>
    </Card>
  );
};

export default News;
