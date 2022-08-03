/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import UserService from '../../services/UserService';

import twitter from '../../assets/images/twitter.svg';
import mapPin from '../../assets/images/map-pin.svg';
import globe from '../../assets/images/globe.svg';
import briefcase from '../../assets/images/briefcase.svg';
import search from '../../assets/images/search.svg';
import sad from '../../assets/images/sad.svg';

import {
  UserContainer, EmptyContainer, NotFoundContainer, SearchContainer, DetailsContainer,
} from './styles';
import Loader from '../Loader';

export default function Layout() {
  const [user, setUser] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getUser(profile) {
    try {
      setIsLoading(true);

      const githubUser = await UserService.listUser(profile);

      setUser(githubUser);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearchUser(event) {
    event.preventDefault();

    if (!searchTerm) {
      console.log('Digite algo');
      return;
    }

    getUser(searchTerm);
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function formateDate(date) {
    const isoDate = new Date(date);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return isoDate.toLocaleDateString('en-US', options);
  }

  const formatedCreatedAt = formateDate(user.created_at);
  const twitterURL = `http://twitter.com/${user.twitter_username}`;

  const details = [
    {
      image: mapPin,
      description: user.location,
    },
    {
      image: twitter,
      description: user.twitter_username,
      href: twitterURL,
    },
    {
      image: globe,
      description: user.blog,
      href: user.blog,
    },
    {
      image: briefcase,
      description: user.company,
    },
  ];

  return (
    <>
      <Loader isLoading={isLoading} />

      <SearchContainer>
        <img src={search} alt="Search" />
        <input
          type="text"
          placeholder="Search GitHub..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button
          type="submit"
          onClick={handleSearchUser}
          disabled={!searchTerm}
        >Search
        </button>
      </SearchContainer>

      {(!isEmpty(user) && user.message !== 'Not Found') && (
        <UserContainer>
          <div className="user">
            <img src={user.avatar_url} alt="Avatar" />
            <div className="details">
              <header>
                <h2>{user.name}</h2>
                <span>Joined {formatedCreatedAt}</span>
              </header>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                @{user.login}
              </a>

              <p>{user.bio}</p>

              <table>
                <thead>
                  <tr>
                    <th>Repos</th>
                    <th>Followers</th>
                    <th>Following</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.public_repos}</td>
                    <td>{user.followers}</td>
                    <td>{user.following}</td>
                  </tr>
                </tbody>
              </table>

              <DetailsContainer>
                {details.map((detail) => (
                  <div className="detail" key={detail.image}>
                    <img src={detail.image} alt={detail.image} />

                    {(!detail.description) && (
                      <small style={{ opacity: 0.8, fontSize: '14px' }}>
                        Not available
                      </small>
                    )}

                    {(!detail.href && detail.description) && (
                      <span>{detail.description}</span>
                    )}

                    {(detail.href && !detail.href.endsWith('null')) && (
                      <a
                        href={detail.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {detail.description}
                      </a>
                    )}
                  </div>
                ))}
              </DetailsContainer>
            </div>
          </div>
        </UserContainer>
      )}

      {isEmpty(user) && (
        <EmptyContainer>
          <img src={search} alt="search" />
          <div>
            <h2>Pesquise um usuário do Github</h2>
            <small>utilize a barra de pesquisa acima.</small>
          </div>
        </EmptyContainer>
      )}

      {user.message === 'Not Found' && (
        <NotFoundContainer>
          <img src={sad} alt="not found" />
          <div>
            <h2>Está conta não existe</h2>
            <small>Tente buscar outra!</small>
          </div>
        </NotFoundContainer>
      )}
    </>
  );
}
