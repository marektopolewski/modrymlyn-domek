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

test('renders phone number as a tel link', () => {
  render(<MainPage />);
  const phoneLink = screen.getByText('(+48) 733 314 441');
  expect(phoneLink).toBeInTheDocument();
  expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+48733314441');
});

test('renders gallery placeholders', () => {
  render(<MainPage />);
  expect(screen.getByText(/Zdjęcie wkrótce 1/)).toBeInTheDocument();
});
