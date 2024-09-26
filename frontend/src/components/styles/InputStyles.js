import styled from 'styled-components';
import  theme  from '../styles/theme';

const { colors } = theme;

const InputStyles = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${colors.lightGrey};
  border-radius: 5px;
  font-size: 1rem;
  width: 300px;
`;

export default InputStyles;
