import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  border-radius: 8px;
  gap: 4px;
`;

export const Name = styled.h2`
  margin: 0;
`;

export const Email = styled.p`
  margin: 0.2rem 0;
  color: #555;
`;

export const Bio = styled.p`
  font-style: italic;
  color: #666;
`;

export const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
