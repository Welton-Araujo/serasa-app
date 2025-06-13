import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  width: 100%;
`;

export const Header = styled.header`
  background-color: #fff;
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 2rem;
  padding-right: 2rem;  
`;

export const ComponentePrincipal = styled.div`
  width: 75%;
  padding: 20px;
  box-sizing: border-box;
`;

export const ComponenteSecundario = styled.div`
  width: 25%;
  background-color: #F4F4FA;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  align-self: flex-start;
`;

export const Footer = styled.footer`
  background-color: #ECECF4;
  color: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0; 
`;

export const FooterLogo = styled.img`
  height: 30px;
`;

export const FooterText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  color: #58595D;
`;
