import PropTypes from 'prop-types';
import { Search } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleFormSubmit = evt => {
    evt.preventDefault();
    let query = evt.currentTarget.query.value.trim();
    if (query) {
      onSubmit(query);
    }
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleFormSubmit}>
        <button type="submit" className="SearchForm-button">
          <Search />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};