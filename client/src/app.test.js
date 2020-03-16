import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './app';
import fetch from 'node-fetch';

test('renders "Let\'s play Yahtzee!"', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Let's play Yahtzee!/);
  expect(heading).toBeInTheDocument();
});
