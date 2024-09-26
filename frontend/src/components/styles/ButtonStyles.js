import styled from 'styled-components';
import  theme  from '../styles/theme';

const { colors } = theme;

const ButtonStyles = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${colors.blue};
  color: ${colors.offWhite};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.darkBlue};
  }
`;

export default ButtonStyles;
