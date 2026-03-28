import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

function GrantPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4 text-center d-flex flex-column gap-3">
      <div className="content-panel">
        <h2>{t('grantTitle')}</h2>
      </div>

      <div
        className="content-panel d-flex align-items-center justify-content-center bg-secondary text-white mx-auto"
        style={{ height: 200, maxWidth: 600, width: '100%' }}
      >
        <span className="fs-5">{t('bannerPlaceholder')}</span>
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
