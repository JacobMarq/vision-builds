import './navbar.scss';
import {Link} from 'react-router-dom';
import SearchBar from '../searchbar/searchbar';
import MenuButton from '../menubutton/menuButton';
import UserNav from '../usernav/userNav';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='main-menu'>
        <MenuButton />
        <Link to='/'>V-Builds</Link>
      </div>
      <SearchBar />
      <div className='menu-items'>
        <UserNav />
        <Link to='/about'>About</Link>
        <Link to='/components'>Components</Link>
        <Link to='/build-your-pc'>Build Your PC</Link>
      </div>
    </div>
  );
}

export default Navbar;
