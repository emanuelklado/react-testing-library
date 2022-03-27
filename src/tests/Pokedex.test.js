import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(heading).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
  });

  it('Teste se é exib o próx Pokémon quando o botão Próx pokémon é clicado.', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });
    const pokemonName = screen.getAllByTestId('pokemon-name');

    userEvent.click(button);
    expect(pokemonName[0].innerHTML).toBe('Charmander');

    userEvent.click(button);
    expect(pokemonName[0].innerHTML).toBe('Caterpie');
    // screen.logTestingPlaygroundURL();
  });

  it('Teste se é exib apenas um pokemon por vez', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });
    const pokemonName = screen.getAllByTestId('pokemon-name');

    userEvent.click(button);
    expect(pokemonName.length).toBe(1);
  });

  it('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const pokemons = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    buttons.forEach((tipo, i) => expect(tipo.innerHTML).toBe(pokemons[i]));
  });

  it('Teste se o botão - All - está sempre visivel.', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', {
      name: /all/i,
    });
    expect(btnAll).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', {
      name: /all/i,
    });
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnAll);
    expect(btnAll.innerHTML).toBe('All');
  });
});
