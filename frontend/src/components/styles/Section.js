import styled, { css } from 'styled-components';
import  theme  from '../styles/theme';
const { colors } = theme;

const media = {
  bp900: (styles) => `
    @media (min-width: 900px) {
      ${styles}
    }
  `,
  bp400: (styles) => `
    @media (min-width: 400px) {
      ${styles}
    }
  `,
  bp600: (styles) => `
    @media (min-width: 600px) {
      ${styles}
    }
  `,
};

const Section = styled.section`
  padding: 3rem 5rem;

  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};

  ${props =>
    props.dark &&
    css`
      background-color: ${colors.black};
      color: ${colors.lightestBlue};
      padding-bottom: 10rem;
      ${media.bp900`
        padding-top: 2rem;
        padding-bottom: 10rem;
      `};
    `};

  & > div {
    max-width: 1400px;
    margin: 0 auto;
  }

  header {
  display: flex;
  align-items: left;
  margin-bottom: 2rem;

  h2 {
    display: inline-block;
    margin: 0;
    font-size: 1.75rem;
    background-image: linear-gradient(90deg, #d1d5da 50%, hsla(0, 0%, 100%, 0) 0);
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 10px 2px;
    padding-bottom: 6px;
    color: white; 
    ${media.bp600`
      font-size: 1.5rem;
    `};
  }
}
`;

export default Section;