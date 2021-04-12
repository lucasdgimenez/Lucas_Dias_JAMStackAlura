import React from 'react';
import styled, {css} from 'styled-components';
import { CardTitle } from '../Card';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const CardDestaqueContent = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border: 3px solid green;
  margin-bottom: 20px;
  ${breakpointsMedia({
    md: css`
      flex-direction: column;
      max-width: 380px;    
    `,
    lg: css`
      flex-direction: row;
      max-width: 890px;
    `,
  })};
`;

export const CardImage = styled.div`
  flex: 2; 
  padding-top: 150px;
  padding-bottom: 150px;
  background-image: url('/icons/proj1.jpg');
  background-position: center;
  background-size: cover;
`

const CardText = styled.div`
  flex: 1;
  color: white;
  background-color: #15702e;
  letter-spacing: 1px;
  p {
    text-align: left;
  }
  @media only screen and (max-width: 600px) {
    background-color: transparent;
    p {
      display: none;
    }
  }
`

export default function CardDestaque({title, text}) {
  return (
    <CardDestaqueContent
      href="https://moneycontrol.vercel.app/"
      target="_blank"
    >
      <CardImage></CardImage>
      <CardText>
        <CardTitle>{title}</CardTitle>
        <p>{text}</p>
      </CardText>
  </CardDestaqueContent>
  );
}


CardDestaque.propTypes = {
  titulo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};