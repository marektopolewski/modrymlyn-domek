import { useTranslation } from 'react-i18next';
import { Nav } from 'react-bootstrap';

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const nextLang = i18n.language === 'pl' ? 'en' : 'pl';

  return (
    <Nav.Link
      onClick={() => i18n.changeLanguage(nextLang)}
      aria-label={`Switch to ${nextLang.toUpperCase()}`}
    >
      {nextLang === 'en' ? '🇬🇧' : '🇵🇱'} {nextLang.toUpperCase()}
    </Nav.Link>
  );
}

export default LanguageSwitch;
