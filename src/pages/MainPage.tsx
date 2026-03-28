import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import ImageGallery from '../components/ImageGallery';
import AvailabilityCalendar from '../components/AvailabilityCalendar';

function MainPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4 text-center d-flex flex-column gap-3">
      <div className="content-panel">
        <h1>{t('mainTitle')}</h1>
        <p className="lead mb-0">{t('summary')}</p>
      </div>

      <div className="content-panel">
        <ImageGallery />
      </div>

      <div className="content-panel">
        <p className="lead mb-0">{t('descriptionIntro')}</p>
      </div>

      <div className="content-panel">
        <p className="lead mb-0">{t('descriptionAmenities')}</p>
      </div>

      <div className="content-panel">
        <p className="lead mb-0">{t('descriptionActivities')}</p>
      </div>

      <div className="content-panel">
        <AvailabilityCalendar />
      </div>

      <div className="content-panel">
        <p className="fs-5">{t('contact')}</p>
        <a href="mailto:biuro@mlynmodry.pl" className="fs-3 fw-bold text-decoration-none">
          biuro@mlynmodry.pl
        </a>
      </div>
    </Container>
  );
}

export default MainPage;
