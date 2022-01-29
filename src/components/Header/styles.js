import styled from 'styled-components';

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

button {
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.spacing.medium};

  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textColor};
    margin-right: ${({ theme }) => theme.spacing.medium};
  }
  small {
    color: ${({ theme }) => theme.textColor};
  }
    }`;
