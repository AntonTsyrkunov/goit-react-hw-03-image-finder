import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchedPhotoes from './API/API';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import css from './styles/styles.module.css';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    imgs: [],
    isLoading: false,
    isModalOpen: false,
    currentImg: '',
  };

  handleSearch = text => {
    this.setState({ query: text, page: 1, imgs: [] });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = image => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      currentImg: image,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchedPhotoes(this.state.query, this.state.page).then(data => {
        this.setState(prev => ({
          imgs: [...prev.imgs, ...data.data.hits],
        }));

        this.setState({ isLoading: false });
      });
    }
  }

  render() {
    console.log(this.state.currentImg);
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery
          imgs={this.state.imgs}
          onClick={this.setImageId}
          toggleModal={this.toggleModal}
        />
        {this.state.imgs.length>11 && 
          <Button onClick={this.handleLoadMore} className={css.Button}></Button>
        }
        {this.state.isModalOpen && (
          <Modal toggleModal={this.toggleModal} img={this.state.currentImg} />
        )}
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}
