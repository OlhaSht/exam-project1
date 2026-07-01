import './NavigationIcons.css';

function openMenu() {
  const body = document.querySelector('.body');
  body?.classList.toggle('menu-open');
}

const NavigationIcons = () => {
  return (
    <div>
      <nav className="mein-icon">
        <div className="mein-icon-nav">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="mein-icon-nav">
          <i className="fa-regular fa-circle-user"></i>
          <ul className="icon-drop-down">
            <li className="icon-link">
              <a className="icon-text" href="https://www.atom.com/login">
                <i className="fa-solid fa-circle-user icon-nav"></i>Login
              </a>
            </li>
            <li className="icon-link">
              <a className="icon-text" href="https://www.atom.com/signup">
                <i className="fa-solid fa-circle-user icon-nav"></i>Singup
              </a>
            </li>
          </ul>
        </div>

        <div className="mein-icon-nav">
          <i className="fa-solid fa-phone"></i>
          <ul className="icon-drop-down">
            <li className="icon-link">
              <a className="icon-text" href="tel:1-877-355-3585">
                <i className="fa-solid fa-phone icon-nav"></i>(877)355-3585
              </a>
            </li>
            <li className="icon-link">
              <a className="icon-text" href="">
                <i className="fa-solid fa-message icon-nav"></i>Chat
              </a>
            </li>
            <li className="icon-link">
              <a className="icon-text" href="">
                <i className="fa-solid fa-envelope icon-nav"></i>Email
              </a>
            </li>
            <li className="icon-link">
              <a className="icon-text" href="">
                <i className="fa-solid fa-circle-notch icon-nav"></i>Help Desk
              </a>
            </li>
          </ul>
        </div>

        <div className="mein-icon-nav">
          <i className="fa-solid fa-heart"></i>
        </div>

        <div className="mein-icon-nav menu-icon-mobile" onClick={openMenu}>
          <span className="icon-mobile-burger"></span>
          <span className="icon-mobile-burger"></span>
          <span className="icon-mobile-burger"></span>
        </div>
      </nav>
    </div>
  );
};

export default NavigationIcons;
