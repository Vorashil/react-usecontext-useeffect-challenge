import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting";

test('renders learn react link', () => {
  render(<Greeting name={"test 1"} />);
  const linkElement = screen.getByText(/salam, test 1/i);
  expect(linkElement).toBeInTheDocument();
});
