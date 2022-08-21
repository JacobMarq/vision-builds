import './searchbar.scss';
import {faSearch, faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FormEvent, useState} from 'react';

function SearchBar() {
  const [active, setActive] = useState(false);
  const handleSubmit = (e: FormEvent) => e.preventDefault();
  const handleSearchChange = (e: FormEvent) => e.target;
  const handleClick = () => setActive(!active);
  let searchBarClasses = ['searchbar', 'closed'];
  let searchInputClasses = ['search-input'];

  if (active) {
    searchBarClasses = ['searchbar', 'open'];
    searchInputClasses = ['search-input', 'visible'];
  }

  return (
    <div className={searchBarClasses.join(' ')}>
      <form className='search' onSubmit={handleSubmit}>
        <input type='text' className={searchInputClasses.join(' ')} id='search' onChange={handleSearchChange} />
        <button className='search-expand' onClick={handleClick}>
          <FontAwesomeIcon icon={active ? faClose : faSearch} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
