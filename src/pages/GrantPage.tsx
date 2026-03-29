import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Image, Nav } from 'react-bootstrap';
import arpDomek from '../assets/arp_domek.jpg';

function GrantPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4 text-center d-flex flex-column gap-3">
      <div className="content-panel">
        <Image src={arpDomek} alt={t('grantTitle')} fluid />
      </div>

      <div className="content-panel">
        <Nav.Link as={Link} to="/" className="fs-5 text-decoration-none">
          {t('back')}
        </Nav.Link>
      </div>
    </Container>
  );
}

export default GrantPage;
