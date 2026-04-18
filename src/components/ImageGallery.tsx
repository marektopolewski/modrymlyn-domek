import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Image } from 'react-bootstrap';
import img01 from '../assets/gallery/01.jpg';
import img02 from '../assets/gallery/02.jpg';
import img03 from '../assets/gallery/03.jpg';
import img04 from '../assets/gallery/04.jpg';
import img05 from '../assets/gallery/05.jpg';
import img06 from '../assets/gallery/06.jpg';
import img07 from '../assets/gallery/07.jpg';
import img08 from '../assets/gallery/08.jpg';
import img09 from '../assets/gallery/09.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09];

function ImageGallery() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <Carousel activeIndex={index} onSelect={setIndex} className="my-4">
      {images.map((src, i) => (
        <Carousel.Item key={src} onClick={next}>
          <Image
            src={src}
            alt={`${t('galleryAlt')} ${i + 1}`}
            fluid
            className="d-block mx-auto rounded"
            style={{ maxHeight: 500, objectFit: 'cover', cursor: 'pointer' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageGallery;
