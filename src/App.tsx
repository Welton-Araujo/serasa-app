import React from 'react';
import AuthorList from './components/AuthorList/AuthorList';
import RecentePosts from './components/PostList/PostList';
import headerLogo from './assets/logo.png';
import footerLogo from './assets/logoFooter.png';

import {
  PageWrapper,
  Header,
  Logo,
  HeaderTitle,
  Container,
  ComponentePrincipal,
  ComponenteSecundario,
  Footer,
  FooterLogo,
  FooterText,
} from './App.styles';

const App: React.FC = () => {
  return (
    <PageWrapper>
      <Header>
        <Logo src={headerLogo} alt="Allow Me News" />
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
        <FooterLogo src={footerLogo} alt="Allow Me" />
        <FooterText>Copyright © 2023 AllowMe News. Todos os direitos reservados.</FooterText>
      </Footer>
    </PageWrapper>
  );
};

export default App;
