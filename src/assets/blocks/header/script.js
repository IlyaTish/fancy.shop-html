const headerScript = (() => {
  /* Variables */

  const burgerBtn     = document.querySelector('.burger-btn'),
        burgerMenu    = document.querySelector('.burger-menu'),

        headerNav     = document.querySelector('.header-nav'),
        headerNavList = document.querySelector('.header-nav__list'),
        headerNavLink = document.querySelectorAll('.header-nav__link'),
        header        = document.querySelector('.header'),
        headerCont    = document.querySelector('.header__cont'),
        headerBottom  = document.querySelector('.header-bottom__cont'),
        headerHeight  = header.clientHeight,

        targets       = document.querySelector('.header'),
        search        = document.querySelector('.search');

  const headerElems = [
    '.header-nav__list',
    '.search'
  ];

  const headerConts = [
    '.burger-menu',
    '.header-bottom__cont'
  ];

  const headerContsDefault = [
    '.header-nav',
    '.header__cont'
  ];

  let flag = 1;



  /* Functions */

  // Teleport onResize function

  const headerTeleport = () => {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if ((viewportWidth < 991) && (flag === 1)) {
      flag = 0;
      teleportEach(headerElems, headerConts)
    }

    if ((viewportWidth > 991) && (flag === 0)) {
      flag = 1;
      teleportEach(headerElems, headerContsDefault)
    }
  }


  // Burger menu

  const initBurgerMenu = () => {
    burgerBtn.addEventListener('click', e => {
      burgerBtn.classList.toggle('active');
      burgerMenu.classList.toggle('active');

      burgerMenu.classList.contains('active') ?
      burgerMenu.style.top = `${ headerHeight }px` :
      burgerMenu.style.top = `0px`;

      if (burgerMenu.classList.contains('hidden')) {
        // show
        burgerMenu.classList.add('transition');
        burgerMenu.clientWidth;
        burgerMenu.classList.remove('hidden');
      } else {
        // hide
        burgerMenu.classList.add('transition');
        burgerMenu.classList.add('hidden');
      }
    });

    burgerMenu.addEventListener('transitionend', () =>
      burgerMenu.classList.remove('transition')
    )
  }



  /* Execution of functions */

  viewportWidth < 991 ?
    teleportEach(headerElems, headerConts) :
    teleportEach(headerElems, headerContsDefault);

  initBurgerMenu();

  burgerMenu.style.top = `${ headerHeight }px`;

  return {
    headerTeleport: headerTeleport
  }
})();