const DrawerInitiator = {
  init({ btnMenu, btnClose, drawer }) {
    btnMenu.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
    btnClose.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle('show');
  },
  _closeDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.remove('show');
  },
};

export default DrawerInitiator;
