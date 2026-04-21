import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AvailabilityCalendar() {
  const { t, i18n } = useTranslation();

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
    return 'unavailable-date';
  };

  return (
    <div>
      <h5 className="mb-3">{t('calendarTitle')}</h5>
      <Calendar
        locale={i18n.language}
        tileDisabled={() => true}
        tileClassName={tileClassName}
        minDate={today}
        maxDate={maxDate}
        showNeighboringMonth={false}
      />
      <p className="mt-3 mb-0 small fst-italic text-muted">{t('calendarDisclaimer')}</p>
    </div>
  );
}

export default AvailabilityCalendar;
