import React from 'react';
import AuthorList from './components/AuthorList';
import styled from 'styled-components';
import RecentePosts from './components/RecentePosts';
import headerLogo from './assets/logo.png'; // imagem do header
import footerLogo from './assets/logoFooter.png'; // imagem do footer

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  width: 100%;
`;

const Header = styled.header`
  background-color: #fff;
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const HeaderTitle = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 2rem;
  padding-right: 2rem;  
`;

const ComponentePrincipal = styled.div`
  width: 75%;
  padding: 20px;
  box-sizing: border-box;
`;

const ComponenteSecundario = styled.div`
  width: 25%;
  background-color: #F4F4FA;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  align-self: flex-start;
`;

const Footer = styled.footer`
  background-color: #ECECF4;
  color: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0; 
`;

const FooterLogo = styled.img`
  height: 30px;
`;

const FooterText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%; /* ou 16px */
  letter-spacing: 0;
  color: #58595D;
`;


const App: React.FC = () => {
  return (
    <PageWrapper>
      <Header>
        <Logo src={headerLogo} alt="Allow Me News Logo" />
      </Header>
      <Container>
        <ComponentePrincipal>
          <AuthorList />
        </ComponentePrincipal>
        <ComponenteSecundario>
          <RecentePosts />
        </ComponenteSecundario>
      </Container>
      <Footer>
        <FooterLogo src={footerLogo} alt="Allow Me Footer Logo" />
        <FooterText>Copyright © 2023 AllowMe News. Todos os direitos reservados.</FooterText>
      </Footer>
    </PageWrapper>
  );
};

export default App;
