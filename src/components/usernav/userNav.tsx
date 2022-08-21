import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function UserNav() {
  const loggedIn = true;

  return (
    <>
      {loggedIn ? (
        <div>
          <FontAwesomeIcon icon={faUser} />
          <span>|</span>
          <Link to='/'>Sign out</Link>
        </div>
      ) : (
        <div>
          <Link to='/'>Log in</Link>
          <span>|</span>
          <Link to='/'>Sign up</Link>
        </div>
      )}
    </>
  );
}

export default UserNav;
