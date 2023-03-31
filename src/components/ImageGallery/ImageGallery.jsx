import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../styles/styles.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ imgs, onClick, toggleModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {imgs.map(({ webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          img={webformatURL}
          key={id}
          onClick={onClick}
          largeImg={largeImageURL}
          toggleModal={toggleModal}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  imgs: PropTypes.array,
  onClick: PropTypes.func,
  toggleModal: PropTypes.func,
};
