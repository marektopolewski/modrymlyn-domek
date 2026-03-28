import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import LanguageSwitch from './LanguageSwitch';
import navLogo from '../assets/nav_logo.png';
import euIcon from '../assets/icons/eu.png';

function AppNavbar() {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={navLogo} alt="Modry Młyn" height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/grant" className="d-flex align-items-center gap-2">
              <Image src={euIcon} alt="" height={20} />
              {t('grantNav')}
            </Nav.Link>
            <div className="d-flex align-items-center ms-2">
              <LanguageSwitch />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
