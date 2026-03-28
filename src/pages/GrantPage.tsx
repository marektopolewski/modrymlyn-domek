import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

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
    </Container>
  );
}

export default GrantPage;
