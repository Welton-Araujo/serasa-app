import React from 'react';
import AuthorList from './components/AuthorList';
import styled from 'styled-components';
import RecentePosts from './components/RecentePosts';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ComponentePrincipal = styled.div`
  width: 75%;
  background-color: #f0f0f0; // apenas para visualização
  padding: 20px;
  box-sizing: border-box;
`;

const ComponenteSecundario = styled.div`
  width: 25%;
  background-color: #e0e0e0; // apenas para visualização
  padding: 20px;
  box-sizing: border-box;
`;

const App: React.FC = () => {
  return (
    <Container>
      <ComponentePrincipal>
        <AuthorList />
      </ComponentePrincipal>
      <ComponenteSecundario>
         <RecentePosts />
      </ComponenteSecundario>
    </Container>
   
  );
};

export default App;
