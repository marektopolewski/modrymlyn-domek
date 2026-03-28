import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const nextLang = i18n.language === 'pl' ? 'en' : 'pl';

  return (
    <Button
      variant="outline-light"
      size="sm"
      onClick={() => i18n.changeLanguage(nextLang)}
      aria-label={`Switch to ${nextLang.toUpperCase()}`}
    >
      {nextLang.toUpperCase()}
    </Button>
  );
}

export default LanguageSwitch;
