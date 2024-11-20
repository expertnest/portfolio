'use client';

import { useTheme } from 'next-themes';
import { PortableText } from '@portabletext/react';
import React from 'react';
import styled from 'styled-components';

export const ParagraphTextStyles = styled.p`
  font-family: 'Nunito_Sans', sans-serif;
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.9;
  color: ${(props) => (props.theme === 'dark' ? 'white' : 'black')};

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TitleStyles = styled.h1`
  font-family: 'Nunito_Sans', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => (props.theme === 'dark' ? 'white' : 'black')};
`;

const myPortableTextComponents = {
  block: {
    normal: ({ children, theme }) => (
      <ParagraphTextStyles theme={theme}>{children}</ParagraphTextStyles>
    ),
    h1: ({ children, theme }) => (
      <TitleStyles theme={theme}>{children}</TitleStyles>
    ),
  },
};

function MyPortableText({ value }) {
  const { theme } = useTheme();

  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: ({ children }) => (
            <ParagraphTextStyles theme={theme}>{children}</ParagraphTextStyles>
          ),
          h1: ({ children }) => (
            <TitleStyles theme={theme}>{children}</TitleStyles>
          ),
        },
      }}
    />
  );
}

export default MyPortableText;
