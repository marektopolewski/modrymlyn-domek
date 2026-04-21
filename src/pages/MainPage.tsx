import { useTranslation } from 'react-i18next';
import { Container, Table } from 'react-bootstrap';
import ImageGallery from '../components/ImageGallery';
import AvailabilityCalendar from '../components/AvailabilityCalendar';

const priceTiers: Array<[number, number]> = [
  [1, 950],
  [2, 1600],
  [3, 2400],
  [4, 2800],
  [5, 3500],
  [6, 4200],
];

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
        <Table
          borderless
          size="sm"
          className="mb-3 mx-auto"
          style={{
            maxWidth: 320,
            '--bs-table-bg': 'transparent',
            '--bs-table-cell-padding-x': 0,
          } as React.CSSProperties}
        >
          <thead>
            <tr>
              <th className="fw-semibold text-start">{t('cennikNightsColumn')}</th>
              <th className="fw-semibold text-end">{t('cennikPriceColumn')}</th>
            </tr>
          </thead>
          <tbody>
            {priceTiers.map(([nights, price]) => (
              <tr key={nights}>
                <td className="text-start">{nights}</td>
                <td className="text-end">{price} PLN</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p className="mb-3 fw-semibold">{t('cennikSummerRule')}</p>
        <Table
          borderless
          size="sm"
          className="mb-0 mx-auto"
          style={{
            maxWidth: 320,
            '--bs-table-bg': 'transparent',
            '--bs-table-cell-padding-x': 0,
          } as React.CSSProperties}
        >
          <tbody>
            <tr>
              <td className="text-start">{t('cennikCheckIn')}</td>
              <td className="text-end">17:00–22:00</td>
            </tr>
            <tr>
              <td className="text-start">{t('cennikCheckOut')}</td>
              <td className="text-end">10:00–12:00</td>
            </tr>
            <tr>
              <td className="text-start">{t('cennikPrepay')}</td>
              <td className="text-end">50%</td>
            </tr>
          </tbody>
        </Table>
        <p className="mt-3 mb-0 small fst-italic text-muted">{t('cennikDisclaimer')}</p>
      </div>

      <div className="content-panel">
        <p className="fs-5">{t('contact')}</p>
        <a href="mailto:biuro@mlynmodry.pl" className="fs-3 fw-bold text-decoration-none d-block">
          biuro@mlynmodry.pl
        </a>
        <a href="tel:+48505045952" className="fs-3 fw-bold text-decoration-none d-block mt-2">
          +48 505 045 952
        </a>
      </div>
    </Container>
  );
}

export default MainPage;
