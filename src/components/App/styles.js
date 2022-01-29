import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 66px auto;
  padding: ${({ theme }) => theme.spacing.medium};

  @media(max-width: 575.98px) {
    margin: 0 auto;
  }
`;
