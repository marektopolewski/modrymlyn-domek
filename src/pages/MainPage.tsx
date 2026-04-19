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
        <h5 className="mb-3">{t('cennikTitle')}</h5>
        <dl className="row mb-0 text-start mx-auto" style={{ maxWidth: 480 }}>
          <dt className="col-6">{t('cennikPricePerNight')}</dt>
          <dd className="col-6 mb-2">1000 PLN</dd>
          <dt className="col-6">{t('cennikMinStay')}</dt>
          <dd className="col-6 mb-2">{t('cennikMinStayValue')}</dd>
          <dt className="col-6">{t('cennikCheckIn')}</dt>
          <dd className="col-6 mb-2">17:00–22:00</dd>
          <dt className="col-6">{t('cennikCheckOut')}</dt>
          <dd className="col-6 mb-2">10:00–12:00</dd>
          <dt className="col-6">{t('cennikPrepay')}</dt>
          <dd className="col-6 mb-0">50%</dd>
        </dl>
        <p className="mt-3 mb-0 small fst-italic text-muted">{t('cennikDisclaimer')}</p>
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
