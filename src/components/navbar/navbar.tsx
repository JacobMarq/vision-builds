import './navbar.scss';
import {Link} from 'react-router-dom';
import SearchBar from '../searchbar/searchbar';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>V-Builds</Link>
      <SearchBar />
      <div>
        <Link to='/about'>About</Link>
        <Link to='/components'>Components</Link>
        <Link to='/build-your-pc'>Build Your PC</Link>
      </div>
    </div>
  );
}

export default Navbar;
