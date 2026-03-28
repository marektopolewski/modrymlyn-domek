import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GrantPage from './GrantPage';

test('renders grant project title', () => {
  render(<MemoryRouter><GrantPage /></MemoryRouter>);
  expect(screen.getByText(/Dywersyfikacja działalności/)).toBeInTheDocument();
});

test('renders banner placeholder', () => {
  render(<MemoryRouter><GrantPage /></MemoryRouter>);
  expect(screen.getByText('Baner wkrótce')).toBeInTheDocument();
});
