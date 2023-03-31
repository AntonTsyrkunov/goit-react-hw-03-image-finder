import { Component } from 'react';
import css from '../styles/styles.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  handleSearch = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSearch} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span>Search</span>
          </button>

          <input
            name="query"
            value={this.query}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeHolder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
