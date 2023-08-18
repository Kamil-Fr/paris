import Navigation from './Navigation.jsx';
import '../scss/_header.scss';
import parisImage from '../images/parisImage.jpg'
function Header() {
  return (
    <header className="header">
      <div className="header-logo">
          <span>Paris </span>
          <img src={parisImage} alt="Logo with Eiffel Tower" />
          <span> visit</span>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
