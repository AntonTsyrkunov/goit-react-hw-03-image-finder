import css from '../styles/styles.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
   

  render() {
    const {img, largeImg, toggleModal} = this.props;
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={() => toggleModal(largeImg)}>
          <img src={img} alt="" className={css.ImageGalleryItem_image} />
        </li>
               
      </>
    );
  }
}

export default ImageGalleryItem;

 ImageGalleryItem.propTypes = {
  img: PropTypes.string, 
  largeImg: PropTypes.string,
  toggleModal: PropTypes.func,
 }
