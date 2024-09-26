import styled from 'styled-components';
import  theme  from '../styles/theme';

const { colors } = theme;

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${colors.darkBlue};
  min-height: 100vh;
`;

export default AppStyles;
