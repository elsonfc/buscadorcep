import { render, screen } from '@testing-library/react';
import App from '.'

describe('Testar componente na tela', () => {
  test('Verifica se a caixa de texto foi criada', () =>{
    render(<App />);
    const verficaObjeto = screen.getByText("title");

    // eslint-disable-next-line no-unused-expressions
    expect(verficaObjeto).toBeInTheDocument;

  });

})

