import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const TextStyleVariantsMap = {
  menu: css`
    font-size: ${({theme}) => theme.typographyVariants.menu.fontSize };
    line-height: ${({theme}) => theme.typographyVariants.menu.lineHeight };
  `
}

const TextBase = styled.span`
  ${props => TextStyleVariantsMap[props.variant]} 
  /* props.variant é o menu.css ai em cima, variant="menu" no componente Text */
  ${function(props) {
    console.log(props)
  }}
`

export default function Text({ tag, children, variant, ...props }) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: null,  
};