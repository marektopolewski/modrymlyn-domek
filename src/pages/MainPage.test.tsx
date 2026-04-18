import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

test('renders main title in Polish', () => {
  render(<MainPage />);
  expect(screen.getByText('Wynajem domku na Kaszubach')).toBeInTheDocument();
});

test('renders description sections', () => {
  render(<MainPage />);
  expect(screen.getByText(/Zapraszamy do naszego przytulnego/)).toBeInTheDocument();
  expect(screen.getByText(/w pełni wyposażony/)).toBeInTheDocument();
  expect(screen.getByText(/zewnętrzne jacuzzi/)).toBeInTheDocument();
});

test('renders email as a mailto link', () => {
  render(<MainPage />);
  const emailLink = screen.getByText('biuro@mlynmodry.pl');
  expect(emailLink).toBeInTheDocument();
  expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:biuro@mlynmodry.pl');
});

test('renders gallery images', () => {
  render(<MainPage />);
  const photos = screen.getAllByAltText(/Zdjęcie domku/);
  expect(photos.length).toBeGreaterThan(0);
});
