import React from 'react'; 
import styled from 'styled-components';
import { FaTwitterSquare, FaLinkedin, FaLink } from 'react-icons/fa';

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
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #E04C85;
  margin: 0;
`;

const DateText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  color: #666;
  margin: 0.2rem 0 1.2rem;
`;


const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  color: #18191E;
  margin: 0 0 1rem;
`;


const Content = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0;
  color: #58595D;
  word-break: break-word;
  white-space: pre-wrap;
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
