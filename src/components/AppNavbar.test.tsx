import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import i18n from '../i18n/i18n';

const renderNavbar = () =>
  render(
    <BrowserRouter>
      <AppNavbar />
    </BrowserRouter>
  );

beforeEach(() => {
  i18n.changeLanguage('pl');
});

test('renders nav logo', () => {
  renderNavbar();
  expect(screen.getByAltText('Modry Młyn')).toBeInTheDocument();
});

test('renders EU grant link in Polish', () => {
  renderNavbar();
  expect(screen.getByText('Unia Europejska')).toBeInTheDocument();
});

test('language switch toggles to English', async () => {
  renderNavbar();
  const switchBtn = screen.getByRole('button', { name: /switch to en/i });
  await userEvent.click(switchBtn);
  expect(screen.getByText('European Union')).toBeInTheDocument();
});
