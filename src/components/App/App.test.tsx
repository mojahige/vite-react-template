import React from 'react';
import { screen, render } from '@testing-library/react';
import { App } from './App';

test('コンポーネントが描画される', async () => {
  render(<App />);

  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Hello world');
});
