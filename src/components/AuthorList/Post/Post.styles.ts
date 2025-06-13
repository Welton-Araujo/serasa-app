import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
`;

export const AuthorName = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #E04C85;
  margin: 0;
`;

export const DateText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #666;
  margin: 0.2rem 0 1.2rem;
`;

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #18191E;
  margin: 0 0 1rem;
`;

export const Content = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #58595D;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Icons = styled.div`
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
