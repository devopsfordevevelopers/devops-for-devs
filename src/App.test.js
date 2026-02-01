import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders React App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React App/i);
  expect(linkElement).toBeInTheDocument();
});
