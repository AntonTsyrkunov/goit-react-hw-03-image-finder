import {Component} from 'react';
import { createPortal } from 'react-dom'
import css from '../styles/styles.module.css'
import PropTypes from 'prop-types';

const modalWindow = document.getElementById('root-modal');

class Modal extends Component {    

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    handleKeyDown = (e) => {
        if (e.code === 'Escape') this.props.toggleModal();        
    }

    handleBackdropClick = (evt) => {
        if (evt.target===evt.currentTarget) this.props.toggleModal();
        
    }

    render () {
        const {img} = this.props;
        return createPortal(
        <div className={css.Overlay} onClick={this.handleBackdropClick}>
            <div className={css.Modal}>
            <img src={img} alt="" />
            </div>
            
        </div>, modalWindow
        )
    }
}

export default Modal;

Modal.propTypes = {
    img: PropTypes.string,
}
