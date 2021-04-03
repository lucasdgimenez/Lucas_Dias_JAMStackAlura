import styled, {css} from 'styled-components';

export const MenuWrapper = styled.nav`
  background-color: #32a852;
  display: flex;
  justify-content: space-around;
`;

//Logo
MenuWrapper.Logo = styled.a`
  background-color: #15702e;
  color: white;
  padding: 10px;
  font-size: 2rem;
`;

//Opções do menu
MenuWrapper.Opcoes = styled.div`
  background-color: #15702e;
  color: white;
  display: flex;
`;