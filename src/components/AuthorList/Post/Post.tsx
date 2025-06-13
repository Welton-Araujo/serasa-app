import React from 'react';
import { FaTwitterSquare, FaLinkedin, FaLink } from 'react-icons/fa';
import {
  Card,
  AuthorName,
  DateText,
  Title,
  Content,
  Icons
} from './Post.styles';

interface PostCardProps {
  title: string;
  content: string;
  date: string;
  author: {
    name: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ title, content, date, author }) => {
  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('Link copiado para a área de transferência!');
    });
  };

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  return (
    <Card>
      <Icons>
        <a href={twitterShare} target="_blank" rel="noopener noreferrer" title="Compartilhar no Twitter">
          <FaTwitterSquare />
        </a>
        <a href={linkedinShare} target="_blank" rel="noopener noreferrer" title="Compartilhar no LinkedIn">
          <FaLinkedin />
        </a>
        <span onClick={handleCopyLink} title="Copiar link">
          <FaLink />
        </span>
      </Icons>
      <AuthorName>{author.name}</AuthorName>
      <DateText>{new Date(date).toLocaleDateString('pt-BR')}</DateText>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Card>
  );
};

export default PostCard;
