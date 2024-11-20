export const ParagraphTextStyles = styled.p`
  font-family: 'Nunito_Sans', sans-serif;
  margin-top: 1.5rem;
  color: var(--text-color); // Use a CSS variable for dynamic color
  font-size: 1rem;
  line-height: 1.9;

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
