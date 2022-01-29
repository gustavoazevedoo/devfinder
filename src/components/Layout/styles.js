import styled from 'styled-components';

export const SearchContainer = styled.form`
  margin-top: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.containerBackgroundColor};
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadhow};

  display: flex;
  align-items: center;

  input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    height: ${({ theme }) => theme.spacing.large};
    margin-left: ${({ theme }) => theme.spacing.medium};
    margin-right: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.textColor};
    font-size: 1.25rem;

    ::placeholder {
      color: ${({ theme }) => theme.textColor};
      opacity: .8;
      font-size: 1rem;
    }
  }

  button {
    font-size: ${({ theme }) => theme.spacing.medium};
    font-weight: bold;
    letter-spacing: 2px;
    padding: 0.5rem 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    color: #f0f0f0;
    background: #562bf7;
    outline: none;
    transition: background-color .2s ease-in;
    position: relative;

    &:hover {
      background: #4308dd;
    }

    &:active {
      padding: 0.45rem 0.95rem;
    }

    &[disabled] {
      background: #ccc;
      color: #fff;
      cursor: default;
    }
  }

  @media(max-width: 575.98px) {
   button {
     font-size: 12px;
     padding: 0.5rem 0.5rem;

     &:active {
      padding: 0.45rem 0.45rem;
     }
   }

   input {
     font-size: 1rem;
   }
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 64px;

  img {
    width: 85px;
    height: 85px;
  }

  div {
    margin-left: 16px;

    h2 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    small {
      font-size: 18px;
    }
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing.xl};

  div {
    margin-left: ${({ theme }) => theme.spacing.large};

    h2 {
      font-size: 2rem;
      margin-bottom: ${({ theme }) => theme.spacing.small};
    }

    small {
      font-size: 1.125rem;
    }
  }

  @media(max-width: 575.98px) {
    flex-direction: column;
    justify-content: flex-end;

    div {
      h2 {
        font-size: 1.5rem;
        margin-top: ${({ theme }) => theme.spacing.medium};
        margin-bottom: 4px;
      }
    }
  }
`;

export const UserContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.containerBackgroundColor};
  padding: 48px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadhow};

  .user {
    display: flex;
    align-items: flex-start;

    & > img {
      width: 128px;
      height: 128px;
      border-radius: 50%;
    }

    .details {
      margin-left: ${({ theme }) => theme.spacing.large};
      width: 100%;

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          display: block;
          opacity: 0.8;
          font-size: 14px;
        }
      }

      & > a {
        font-size: 16px;
        color: rgb(62,161,219);
        text-decoration: none;
        display: block;
        margin-top: ${({ theme }) => theme.spacing.small};
      }

      p {
        margin: ${({ theme }) => theme.spacing.large} 0;
        font-size: 1.125rem;
      }

      table {
        border-spacing: 0;
        background: ${({ theme }) => theme.backgroundColor};
        border-radius: ${({ theme }) => theme.borderRadius};
        width: 100%;
        padding: 16px 32px;

        thead tr th {
          text-align: start;
          font-weight: normal;
          color: ${({ theme }) => theme.textColor};
          opacity: 0.8;
          font-size: 14px;
        }

        tbody tr td {
          font-weight: bold;
          font-size: 18px;
          margin-top: 4px;
        }

        tr {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }

  @media(max-width: 575.98px) {
    padding: 1.5rem;
    .user {
     flex-direction: column;
     align-items: center;
     justify-content: center;

      .details {
        margin-top: 1rem;
        margin-left: 0;
      }

      .details header {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
          margin-top: 4px;
        }
      }

      .details > a {
        text-align: center;
      }

      tr {
        place-items: start;
      }
    }
  }
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 15px;
  margin-top: 32px;

  .detail {
    display: flex;
    align-items: center;
    word-break: break-word;

    img {
      margin-right: 8px;
    }

    span, a {
      color: ${({ theme }) => theme.textColor};
      transition: .2s;
    }

    a {
      margin: 0;
      text-decoration: none;
    }

    a:hover {
      color: rgb(62,161,219);
      text-decoration: underline;
    }
  }

  @media(max-width: 575.98px) {
    display: flex;
    flex-direction: column;

    a {
      color: rgb(62,161,219) !important;
    }
  }
`;
