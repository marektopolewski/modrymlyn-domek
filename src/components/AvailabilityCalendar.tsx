import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AvailabilityCalendar() {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setMonth(d.getMonth() + 3);
    return d;
  }, [today]);

  const tileClassName = ({ date }: { date: Date }) => {
    if (date < today) return 'past-date';
    return null;
  };

  return (
    <div>
      <h5 className="mb-3">{t('calendarTitle')}</h5>
      <Calendar
        locale={i18n.language}
        tileClassName={tileClassName}
        minDate={today}
        maxDate={maxDate}
        showNeighboringMonth={false}
        onClickDay={() => setShowModal(true)}
      />
      <p className="mt-3 mb-0 small fst-italic text-muted">{t('calendarDisclaimer')}</p>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t('calendarModalTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-3">{t('calendarModalBody')}</p>
          <a href="mailto:biuro@mlynmodry.pl" className="fw-bold text-decoration-none d-block">
            biuro@mlynmodry.pl
          </a>
          <a href="tel:+48505045952" className="fw-bold text-decoration-none d-block mt-1">
            +48 505 045 952
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            {t('calendarModalClose')}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AvailabilityCalendar;
