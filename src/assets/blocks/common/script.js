/* Variables */

const viewportWidth   = window.innerWidth || document.documentElement.clientWidth;



/* Functions */

// Document ready function

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}


// Teleport function

const appendElem = (elem, cont) => {
  if (cont) cont.appendChild(elem)
}

const teleportEach = (list, conts) => {
  const containers = conts.map(cont => document.querySelector(cont));

  const elems = list.forEach((item, itemIndex) => {
    const $item = document.querySelector(item);

    containers[itemIndex].appendChild($item)
  })
}


// Init Swiper.js sliders

const swipersInit = () => {
  const mainSlider = new Swiper('.main-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 12000
    },
    mousewheel: {
      forceToAxis: true,
    }
  });

  const productItemsSwiper = new Swiper('.product-items-swiper', {
    slidesPerView: 'auto',
    direction: 'horizontal',
    mousewheel: {
      forceToAxis: true,
    }
  });

  const itemsSwiper = new Swiper('.items-swiper', {
    slidesPerView: 'auto',
    direction: 'horizontal',
    freeMode: true,
    mousewheel: {
      forceToAxis: true,
    }
  })
}


// Set active class

const setActive = (elems, selector) => {
  [].forEach.call(elems, (item, index) => {
    item.addEventListener('click', e => {
      const target = e.target,
            childs = item.querySelectorAll(''+ selector +'');

      if (target === item) return;

      [].forEach.call(childs, (childItem, index) => {
        childItem.classList.remove('active');
        target.classList.add('active');
      })
    })
  })
}
