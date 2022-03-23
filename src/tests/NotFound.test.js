import { screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    screen.logTestingPlaygroundURL();
    const notFound = screen.getByRole('heading', {
      level: 2,
      name: /page requested not found/i,
    });
    const emoji = screen.getByRole('img', {
      name: /crying emoji/i,
    });
    const imgURL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(notFound).toBeInTheDocument();
    expect(emoji).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img.src).toEqual(imgURL);
  });
});
