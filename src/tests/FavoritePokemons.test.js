import { screen } from '@testing-library/react';
import React from 'react';
import { FavoritePokemons } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exib a msg "No favorite pokemon found",se n tiver pok favoritos', () => {
    const { history } = renderWithRouter(<FavoritePokemons />);
    history.push('/Favorites');

    const notFoundFavorites = screen.getByText(/no favorite pokemon found/i);
    expect(notFoundFavorites).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
  });

  //   it('Teste se é exib a msg "No favorite pokemon found",se n tiver pok favoritos', () => {
  //     const { history } = renderWithRouter(<FavoritePokemons />);
  //     history.push('/Favorites');

//     const notFoundFavorites = screen.getByText(/no favorite pokemon found/i);
//     expect(notFoundFavorites).toBeInTheDocument();
//     // screen.logTestingPlaygroundURL();
//   });
});
