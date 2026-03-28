import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page with title and email', () => {
  render(<App />);
  expect(screen.getByText(/Wynajem domku na Kaszubach/)).toBeInTheDocument();
  expect(screen.getByText('biuro@mlynmodry.pl')).toBeInTheDocument();
});

test('renders navbar with EU grant link', () => {
  render(<App />);
  expect(screen.getByText('Unia Europejska')).toBeInTheDocument();
});
