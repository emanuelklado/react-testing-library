import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Teste o componente <PokemonDetails.js />', () => {
  const details = 'More details';

  it('Teste se as informações detalhadas do Pokémon são mostradas na tela.', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.queryByText(details));
    screen.logTestingPlaygroundURL();
    console.log(pokemons);
    console.log(pokemons[0]);

    const titleDetail = screen.getByText(`${pokemons[0].name} Details`);
    expect(titleDetail).toBeInTheDocument();

    const typePokeDetail = screen.getByText(`${pokemons[0].type}`);
    expect(typePokeDetail).toBeInTheDocument();

    const summary = screen.getByRole('heading', {
      level: 2,
      name: /summary/i,
    });
    expect(summary).toBeInTheDocument();

    const textSummary = screen.getByText(`${pokemons[0].summary}`);
    expect(textSummary).toBeInTheDocument();
  });

  it('teste se exist na pág 1 seção com mapas contendo localizações do pokémon', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.queryByText(details));

    const titleLocation = screen.getByRole('heading', {
      level: 2,
      name: `Game Locations of ${pokemons[0].name}`,
    });
    expect(titleLocation).toBeInTheDocument();

    pokemons[0].foundAt.forEach(({ location, map }, i) => {
      const loc = screen.queryByText(location);
      expect(loc).toBeInTheDocument();

      const imgMap = screen.getAllByAltText(`${pokemons[0].name} location`)[i].src;
      expect(imgMap).toEqual(map);
    });
  });

  it('Teste se o user pode favoritar um pokémon através da página de detalhes.', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.queryByText(details));

    const checkbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    expect(checkbox).toBeInTheDocument();
  });
});
