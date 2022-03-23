import { screen } from '@testing-library/react';
import React from 'react';
import { FavoritePokemons } from '../components';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exib a msg "No favorite pokemon found",se n tiver pok favoritos', () => {
    renderWithRouter(<FavoritePokemons />);
    const notFoundFavorites = screen.getByText(/no favorite pokemon found/i);
    expect(notFoundFavorites).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
  });
  it('Teste se é exibido os cards dos pokemons favoritos', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
    pokemons.forEach((elem) => {
      const pokemonName = screen.getByText(elem.name);
      expect(pokemonName).toBeInTheDocument();
    });
  });
});
