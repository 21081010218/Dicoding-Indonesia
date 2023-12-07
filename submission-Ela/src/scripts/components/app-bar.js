import toggle from '../../public/images/icons/menu.png';
import close from '../../public/images/icons/close.png';

class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <div class="buttonnav">
        <a href="/" class="buttonnav__logo">
          Cany Cuny <3 </a>
      </div>
      <div class="button__menu" id="btn-menu">
        <a href="#"><img class="lazyload" src="${toggle}" alt="toggle-menu" /></a>
      </div>
      <div class="navbar__menu" id="navbar-menu">
        <div class="button__close" id="btn-close">
          <a href="#"><img class="lazyload" src="${close}" alt="close" /></a>
        </div>
        <ul class="nav__list">
          <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
          <li class="nav__item">
            <a href="#/like" class="nav__link">Favorite</a>
          </li>
          <li class="nav__item">
            <a href="https://www.instagram.com/elgdmr/" target="_blank" rel="noopener noreferrer" class="nav__link">About</a>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('app-bar', Appbar);
