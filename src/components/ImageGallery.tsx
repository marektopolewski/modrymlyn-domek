import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';

function ImageGallery() {
  const { t } = useTranslation();
  const placeholders = [1, 2, 3];

  return (
    <Carousel className="my-4">
      {placeholders.map((i) => (
        <Carousel.Item key={i}>
          <div
            className="d-flex align-items-center justify-content-center bg-secondary text-white"
            style={{ height: 300 }}
          >
            <span className="fs-4">{t('galleryPlaceholder')} {i}</span>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageGallery;
