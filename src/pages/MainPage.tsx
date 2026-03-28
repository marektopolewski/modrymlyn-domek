import { useTranslation } from 'react-i18next';
import { Container, Image } from 'react-bootstrap';
import ImageGallery from '../components/ImageGallery';
import logo from '../assets/mlyn_logo.jpg';

function MainPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4 text-center">
      <Image src={logo} alt="Modry Młyn" className="mb-4" style={{ maxHeight: 200 }} />
      <h1>{t('mainTitle')}</h1>
      <p className="lead my-4">{t('description')}</p>

      <ImageGallery />

      <div className="mt-5">
        <p className="fs-5">{t('contact')}</p>
        <a href="tel:+48733314441" className="fs-3 fw-bold text-decoration-none">
          (+48) 733 314 441
        </a>
      </div>
    </Container>
  );
}

export default MainPage;
