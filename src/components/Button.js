import React from 'react'
import Styled from 'styled-components';

const ButtonWrapper = Styled.button`
    font-size: 1rem;
    border-radius: 5px;
    padding: 0.25rem 1rem;
    margin: 0 1rem;
    background: transparent;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};

    ${props =>
    props.primary &&
    `
            background: ${props => props.theme.primary};
            color: white;
        `
  };
`

export default (props) =>
  <ButtonWrapper>
    <p>{props.children}</p>
  </ButtonWrapper>
