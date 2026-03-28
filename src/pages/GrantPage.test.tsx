import { render, screen } from '@testing-library/react';
import GrantPage from './GrantPage';

test('renders grant project title', () => {
  render(<GrantPage />);
  expect(screen.getByText(/Dywersyfikacja działalności/)).toBeInTheDocument();
});

test('renders banner placeholder', () => {
  render(<GrantPage />);
  expect(screen.getByText('Baner wkrótce')).toBeInTheDocument();
});
