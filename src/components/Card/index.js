import React from 'react';
import styled, {css} from 'styled-components';
import {CardImage} from '../CardDestaque';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const CardContent = styled.a`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  margin-bottom: 40px;
  border: 3px solid green;
  ${breakpointsMedia({
    md: css`
      width: 370px;
      img {
      height: 290px;
    }
    `,
    lg: css`
      width: 290px;
    `
  })}
`

export const CardTitle = styled.h1`
  background-color: #32A852;
  color: black;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  text-transform: capitalize;
  margin-top: 4px;
  margin: 0;
  padding: 10px;
  ${breakpointsMedia({
    md: css`
      margin-bottom: 8px;
      padding: 10px;
    `
  })}
`

export default function Card({image, title, href}) {
  return (
    <CardContent
      href={href}
      target="_blank"
    >
      <CardImage 
        style={{
          backgroundImage: `url(/icons/${image}.jpg)`,
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          paddingTop: '150px',
          paddingBottom: '150px',
          paddingRight: '160px',
          paddingLeft: '130px'
        }}
      >
      </CardImage>
      <CardTitle>
        {title}
      </CardTitle>
    </CardContent>    
  );
}

Card.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};