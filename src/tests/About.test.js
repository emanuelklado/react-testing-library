import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
// import App from '../App';
import { About } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const { history } = renderWithRouter(<About />);
    history.push('/About');
    const heading = screen.getByRole('heading', {
      level: 2,
      name: /About Pokédex/i,
    });
    expect(heading).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<About />);
    history.push('/About');
    const p1 = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all/i,
    );
    const p2 = screen.getByText(
      /One can filter Pokémons by type, and see more details for each one of them/i,
    );
    expect(p1 && p2).toBeInTheDocument();
  });

  it('Teste se a página contém a imagem de uma Pokédex:.', () => {
    const { history } = renderWithRouter(<About />);
    history.push('/About');
    const imgURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(img.src).toEqual(imgURL);
  });
});
