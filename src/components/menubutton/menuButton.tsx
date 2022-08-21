import './menuButton.scss';
import {useState} from 'react';

function MenuButton() {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(!active);
  let menuButtonClasses = ['menu-button'];

  if (active) {
    menuButtonClasses = ['menu-button', 'active'];
  }

  return (
    <div className={menuButtonClasses.join(' ')} aria-label='menu-button' onClick={handleClick}>
      <span />
    </div>
  );
}

export default MenuButton;
