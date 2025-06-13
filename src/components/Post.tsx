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
  word-break: break-word;
  white-space: pre-wrap; /* se quiser preservar quebras de linha e espaços */
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

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

const PostCard: React.FC<PostCardProps> = ({ title, content, date, author }) => {
  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('Link copiado para a área de transferência!');
    });
  };

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  console.log("content: ", content)
  return (
    <Card>
      <Icons>
        <a href={twitterShare} target="_blank" rel="noopener noreferrer" title="Compartilhar no Twitter">
          <FiTwitter />
        </a>
        <a href={linkedinShare} target="_blank" rel="noopener noreferrer" title="Compartilhar no LinkedIn">
          <FiLinkedin />
        </a>
        <span onClick={handleCopyLink} title="Copiar link">
          <FiLink />
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
