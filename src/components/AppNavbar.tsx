import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import LanguageSwitch from './LanguageSwitch';
import navLogo from '../assets/nav_logo.png';
import euIcon from '../assets/icons/eu.png';

function AppNavbar() {
  const { t } = useTranslation();

  return (
    <Navbar expand="sm" sticky="top" style={{ backgroundColor: '#d8d8d6' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={navLogo} alt="Modry Młyn" height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto text-end">
            <Nav.Link as={Link} to="/grant" className="d-flex align-items-center justify-content-end gap-2">
              <Image src={euIcon} alt="" height={20} />
              {t('grantNav')}
            </Nav.Link>
            <LanguageSwitch />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
